import React from 'react';
import { useState, useEffect} from 'react';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Title } from './../blocks/Title';
import { Form } from './../blocks/Form';

const API_URL = 'https://cog-study.herokuapp.com';
const PATH = '/react_level4/chapter04/book/';

export const BookEdit = (props) => {

  return (
    <>
      <Title>本の編集</Title>
    </>
  );
};
