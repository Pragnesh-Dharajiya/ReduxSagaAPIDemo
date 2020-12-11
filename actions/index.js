import {ADD_MOVIE, FETCH_FAILED, FETCH_MOVIES, FETCH_SUCCEEDED} from './actionType';

export const fetchMoviesAction = (sort) => {
  return {
    type: FETCH_MOVIES,
    sort,
  };
};

export const addMovieAction = (newMovie) => {
  return {
    type: ADD_MOVIE,
    newMovie,
  };
};

export const fetchSuccessAction = (receiveMovies) => {
  return {
    type: FETCH_SUCCEEDED,
    receiveMovies,
  };
};
export const fetchFailedAction = (error) => {
  return {
    type: FETCH_FAILED,
    error,
  };
};
