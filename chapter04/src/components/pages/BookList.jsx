import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Title } from "./../blocks/Title";
import { TableBox } from "./../blocks/Table";

const API_URL = "https://cog-study.herokuapp.com";
const PATH = "/react_level4/chapter04/book/";

export const BookList = (props) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await axios.get(API_URL + PATH);
      const data = response.data;
      setList(data);
    })();
  }, []);

  return (
    <>
      <Title>本の一覧</Title>
      {list.length > 0 && <TableBox list={list} />}
    </>
  );
};
