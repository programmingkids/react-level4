import React from "react";
import { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { StateContext } from "./../../providers/StateContext";
import { Player } from "./Player";

export const YoutubePlayer = () => {
  const [movie, setMovie] = useState({});
  const { movieList } = useContext(StateContext);
  const { id } = useParams();

  useEffect(() => {
    if (movieList.length > 0) {
      const data = movieList.find((m) => m.id === parseInt(id));
      const urlObj = new URL(data.url);
      const videoID = urlObj.search.slice(3);
      data["videoID"] = videoID;
      setMovie(data);
    }
  }, [movieList]);

  return (
    <>
      <div className="movie-container">
        <div className="movie-title">{movie.title}</div>
        <div className="movie-genre">{movie.genre}</div>
        <Player movie={movie} />
        <div className="button-container">
          <Link to="/" className="btn">
            ホーム
          </Link>
        </div>
      </div>
    </>
  );
};
