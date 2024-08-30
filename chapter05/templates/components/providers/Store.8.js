export const reducer = (state, action) => {
  switch (action.type) {
    case 'list':
      return saveMovieList(state, action);
    case 'add':
      return addMovie(state, action);
    case 'update':
      return updateMovie(state, action);
    case 'delete':
      return deleteMovie(state, action);
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

const updateMovie = (state, action) => {
  const { movie } = action.payload;

  return {
    ...state,
    movieList: state.movieList.map((m) => {
      if (m.id === movie.id) {
        return movie;
      }
      return m;
    }),
  };
};

const deleteMovie = (state, action) => {
  const { id } = action.payload;

  return {
    ...state,
    movieList: state.movieList.filter((m) => m.id !== id),
  };
};
