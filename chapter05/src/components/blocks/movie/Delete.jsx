import React from "react";
import { useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { DispatchContext } from "./../../providers/DispatchContext";
import { StateContext } from "./../../providers/StateContext";
import { getMovie, deleteMovie } from "./../../providers/MovieAPI";

export const Delete = () => {
  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);
  const { apiURL } = useContext(StateContext);
  const { id } = useParams();

  useEffect(() => {
    (async () => {
      getMovie(apiURL, id)
        .then(() => deleteMovie(apiURL, id))
        .catch(() => console.log("this is error"))
        .finally(() => {
          dispatch({
            type: "delete",
            payload: {
              id: parseInt(id),
            },
          });
          navigate("/");
        });
    })();
  }, []);

  return "";
};
