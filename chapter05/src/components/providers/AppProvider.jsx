import { useEffect, useReducer } from "react";
import { StateContext } from "./StateContext";
import { DispatchContext } from "./DispatchContext";
import { reducer } from "./Store";
import { initialData } from "./Data";
import { getMovies } from "./MovieAPI";

export const AppProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialData);

  useEffect(() => {
    (async () => {
      const { movieList, apiURL } = state;
      if (movieList.length > 0) return;
      const data = await getMovies(apiURL);
      dispatch({
        type: "list",
        payload: {
          movieList: data,
        },
      });
    })();
  }, []);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};
