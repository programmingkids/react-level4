import React from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'https://cog-study.herokuapp.com';
const PATH = '/react_level4/chapter04/book/';

export const BookDelete = () => {
  const navigate = useNavigate();
  const {bookId} = useParams();
  
  useEffect(() => {
    (async() => {
      const url = `${API_URL}${PATH}${bookId}/`;
      
      axios
        .get(url)
        .then(() => axios.delete(url))
        .catch(() => console.log('this is error'))
        .finally(() => {
          navigate("/");
        });
    })();
  }, []);
  
  return ;
};
