import { useContext } from 'react';
import { StateContext } from './../../providers/StateContext';
import { Movie } from './Movie';

export const List = () => {
  const { movieList } = useContext(StateContext);
  
  return (
    <>
      {movieList.map((m) => (
        <Movie key={m.id} {...m} />
      ))}
    </>
  );
};
