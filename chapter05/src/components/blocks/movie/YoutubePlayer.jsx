import React from 'react';
import { useState, useEffect, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { StateContext } from './../../providers/StateContext';

export const YoutubePlayer = () => {
  const [movie, setMovie] = useState({});
  const { movieList } = useContext(StateContext);
  const { id } = useParams();
  
  useEffect(() => {
    if(movieList.length > 0) {
      const data = movieList.find(m => m.id === parseInt(id));
      const urlObj = new URL(data.url);
      const videoID = urlObj.search.slice(3);
      data['videoID'] = videoID;
      setMovie(data);
    }
  },[movieList]);
  
  return (
    <div className="movie-container">
      <div className="movie-title">{movie.title}</div>
      <div className="movie-genre">{movie.genre}</div>
      <div className="movie-box">
        <iframe 
          width="560" 
          height="315"
          frameBorder="0" 
          src={`https://www.youtube.com/embed/${movie.videoID}`}
          allow="accelerometer; autoplay; clipboard-write; 
                 encrypted-media; gyroscope; 
                 picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
      </div>
      <div className="button-container">
        <Link to="/" className="btn">ホーム</Link>
      </div>
    </div>
  );
};
