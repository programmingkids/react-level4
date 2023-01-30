import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { StateContext } from './../../providers/StateContext';
import { DispatchContext } from './../../providers/DispatchContext';
import { createMovie } from './../../providers/MovieAPI';

export const Add = () => {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);
  const { apiURL } = useContext(StateContext);
  const [ movie, setMovie] = useState({
    title: '',
    url: '',
    genre: '',
  });
  
  const handleOnChange = (e) => {
    const m = {...movie};
    m[e.target.id] = e.target.value;
    setMovie(prevMovie => m);
  };
  
  const handleOnClickButton = (e) => {
    (async () => {
      const data = await createMovie(apiURL, movie);
      dispatch({
        type: 'add',
        payload : {
          movie : data,
        }
      });
      setMovie({
        title: '',
        url: '',
        genre: '',
      });
      navigate('/');
    })();
  };
  
  return (
    <div className="movieForm">
      <div className="m-form-text-container">
        <div className="m-form-text-label">タイトル</div>
        <div>
          <input
            className="m-form-text" 
            type="text"
            id="title" 
            onChange={handleOnChange} 
            value={movie.title}
          />
        </div>
      </div>
      <div className="m-form-text-container">
        <div className="m-form-text-label">URL</div>
        <div>
          <input
            className="m-form-text"
            type="text"
            id="url"
            onChange={handleOnChange}
            value={movie.url}
          />
        </div>
      </div>
      <div className="m-form-text-container">
        <div className="m-form-text-label">ジャンル</div>
        <div>
          <input
            className="m-form-text"
            type="text"
            id="genre"
            onChange={handleOnChange}
            value={movie.genre}
          />
        </div>
      </div>
      <div className="button-container">
        <button 
          onClick={handleOnClickButton} 
          className="primary">新規作成
        </button>
      </div>
    </div>
  );
};
