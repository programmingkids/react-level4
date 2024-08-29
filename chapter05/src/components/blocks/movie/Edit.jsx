import React from "react";
import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DispatchContext } from "./../../providers/DispatchContext";
import { StateContext } from "./../../providers/StateContext";
import { updateMovie } from "./../../providers/MovieAPI";
import { EditForm } from "./EditForm";

export const Edit = () => {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);
  const { movieList, apiURL } = useContext(StateContext);
  const { id } = useParams();
  const [movie, setMovie] = useState({
    title: "",
    url: "",
    genre: "",
  });

  useEffect(() => {
    if (movieList.length > 0) {
      const data = movieList.find((m) => m.id === parseInt(id));
      setMovie(data);
    }
  }, [movieList]);

  const handleOnChange = (e) => {
    const m = { ...movie };
    m[e.target.id] = e.target.value;
    setMovie(m);
  };

  const handleOnClickButton = (e) => {
    (async () => {
      const data = await updateMovie(apiURL, movie.id, movie);
      dispatch({
        type: "update",
        payload: {
          movie: data,
        },
      });
      navigate("/");
    })();
  };

  return (
    <>
      <EditForm
        movie={movie}
        handleOnChange={handleOnChange}
        handleOnClickButton={handleOnClickButton}
      />
    </>
  );
};
