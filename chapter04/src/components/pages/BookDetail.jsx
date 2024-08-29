import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Title } from "./../blocks/Title";
import { Detail } from "./../blocks/Detail";

const API_URL = "https://cog-study.herokuapp.com";
const PATH = "/react_level4/chapter04/book/";

export const BookDetail = (props) => {
  const [book, setBook] = useState({});
  const { bookId } = useParams();

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
      <Title>本の詳細</Title>
      <Detail data={book} />
      <div className="App">
        <Link to="/">本の一覧</Link>
      </div>
    </>
  );
};
