import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { Title } from './../blocks/Title';
import { Form } from './../blocks/Form';

const API_URL = 'https://cog-study.herokuapp.com';
const PATH = '/react_level4/chapter04/book/';

export const BookCreate = (props) => {
  const navigate = useNavigate();
  const [book, setBook] = useState({
    title: '',
    author: '',
    price: '',
    genre: '',
  });

  const handleOnChange = (e) => {
    setBook((book) => ({
      ...book,
      [e.target.id]: e.target.value,
    }));
  };

  const handleOnClickButton = (e) => {
    (async () => {
      const response = await axios.post(API_URL + PATH, book);
      const data = response.data;

      setBook({
        title: '',
        author: '',
        price: '',
        genre: '',
      });

      navigate('/');
    })();
  };

  return (
    <>
      <Title>本の新規作成</Title>
      <Form
        book={book}
        handleOnChange={handleOnChange}
        handleOnClickButton={handleOnClickButton}
      />
      <div className="App">
        <Link to="/">本の一覧</Link>
      </div>
    </>
  );
};
