import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Title } from './../blocks/Title';
import { Form } from './../blocks/Form';

const API_URL = 'https://cog-study.herokuapp.com';
const PATH = '/react_level4/chapter04/book/';

export const BookEdit = (props) => {
  const navigate = useNavigate();
  // URLパラメータ取得
  const { bookId } = useParams();

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
      const url = `${API_URL}${PATH}${book.id}/`;
      const response = await axios.put(url, book);
      const data = response.data;
      console.log(data);

      setBook({
        title: '',
        author: '',
        price: '',
        genre: '',
      });

      navigate(`/book/detail/${book.id}`);
    })();
  };

  useEffect(() => {
    (async () => {
      const url = `${API_URL}${PATH}${bookId}/`;
      const response = await axios.get(url);
      const data = response.data;
      setBook(data);
    })();
  }, []);

  return (
    <>
      <Title>本の編集</Title>
      <Form
        book={book}
        handleOnChange={handleOnChange}
        handleOnClickButton={handleOnClickButton}
      />
      <div className="App">
        <Link to={`/book/detail/${book.id}`}>本の詳細</Link>
      </div>
    </>
  );
};
