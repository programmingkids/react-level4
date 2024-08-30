export const reducer = (state, action) => {
  switch (action.type) {
    case 'list':
      return saveMovieList(state, action);
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
