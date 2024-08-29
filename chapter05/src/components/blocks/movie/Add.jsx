import React from "react";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StateContext } from "./../../providers/StateContext";
import { DispatchContext } from "./../../providers/DispatchContext";
import { createMovie } from "./../../providers/MovieAPI";
import { AddForm } from "./AddForm";

export const Add = () => {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);
  const { apiURL } = useContext(StateContext);
  const [movie, setMovie] = useState({
    title: "",
    url: "",
    genre: "",
  });

  const handleOnChange = (e) => {
    const m = { ...movie };
    m[e.target.id] = e.target.value;
    setMovie((prevMovie) => m);
  };

  const handleOnClickButton = (e) => {
    (async () => {
      const data = await createMovie(apiURL, movie);
      dispatch({
        type: "add",
        payload: {
          movie: data,
        },
      });
      setMovie({
        title: "",
        url: "",
        genre: "",
      });
      navigate("/");
    })();
  };

  return (
    <>
      <AddForm
        movie={movie}
        handleOnChange={handleOnChange}
        handleOnClickButton={handleOnClickButton}
      />
    </>
  );
};
