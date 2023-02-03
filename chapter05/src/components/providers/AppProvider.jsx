import { useEffect, useReducer } from 'react';
import { StateContext } from './StateContext';
import { DispatchContext } from './DispatchContext';
import { reducer } from './Store';
import { initialData } from './Data';
import { getMovies } from './MovieAPI';

export const AppProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialData);
  
  
  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>
        {children}
      </StateContext.Provider>
    </DispatchContext.Provider>
  );
};
