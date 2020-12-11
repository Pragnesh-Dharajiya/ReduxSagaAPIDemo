import {connect} from 'react-redux';
import {addMovieAction, fetchMoviesAction} from '../actions';
import MovieComponent from '../components/MovieComponent';

const mapStateToProps = (state) => {
  return {
      movies:state.movieReducers
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchMovies: () => {
      dispatch(fetchMoviesAction());
    },
    onAddMovies: (newMovie) => {
      dispatch(addMovieAction(newMovie));
    },
  };
};
const MovieContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MovieComponent);
export default MovieContainer;
