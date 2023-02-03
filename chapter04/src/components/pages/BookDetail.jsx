import React from 'react';
import { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Title } from './../blocks/Title';
import { Detail } from './../blocks/Detail';

const API_URL = 'https://cog-study.herokuapp.com';
const PATH = '/react_level4/chapter04/book/';

export const BookDetail = (props) => {

  return (
    <>
      <Title>本の詳細</Title>
    </>
  );
};
