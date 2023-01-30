import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { DispatchContext } from './../../providers/DispatchContext';
import { StateContext } from './../../providers/StateContext';
import { updateMovie } from './../../providers/MovieAPI';

export const Edit = () => {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);
  const { movieList, apiURL } = useContext(StateContext);
  const { id } = useParams();
  const [ movie, setMovie ] = useState({
    title: '',
    url: '',
    genre: '',
  });
  
  useEffect(() => {
    if(movieList.length > 0) {
      const data = movieList.find(m => m.id === parseInt(id));
      setMovie(data);
    }
  },[movieList]);
  
  const handleOnChange = (e) => {
    const m = {...movie};
    m[e.target.id] = e.target.value;
    setMovie(m);
  };
  
  const handleOnClickButton = (e) => {
    (async () => {
      const data = await updateMovie(apiURL, movie.id, movie);
      dispatch({
        type: 'update',
        payload : {
          movie: data,
        }
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
          className="primary">更新
        </button>
      </div>
    </div>
  );
};
