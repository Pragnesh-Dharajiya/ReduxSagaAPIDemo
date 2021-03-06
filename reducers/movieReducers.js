const {
  FETCH_MOVIES,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  ADD_MOVIE,
} = require('../actions/actionType');

const movieReducers = (movies = [], action) => {
  switch (action.type) {
    case FETCH_SUCCEEDED:
      return action.receivedMovies;
    case FETCH_FAILED:
      return [];
    case ADD_MOVIE:
      return [...movies, action.newMovie];
    default:
      return movies;
  }
};

export default movieReducers;
