export const reducer = (state, action) => {
  switch (action.type) {
    case 'list':
      return saveMovieList(state, action);
    case 'add':
      return addMovie(state, action);
    default:
      return state;
  }
};

const saveMovieList = (state, action) => {
  const { movieList } = action.payload;
  return {
    ...state,
    movieList: movieList,
  };
};

const addMovie = (state, action) => {
  const { movie } = action.payload;
  return {
    ...state,
    movieList: state.movieList.concat(movie),
  };
};
