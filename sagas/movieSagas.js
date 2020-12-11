import {FETCH_MOVIES,FETCH_SUCCEEDED,FETCH_FAILED} from '../actions/actionType';
import { Api } from './api';
import {put,takeLatest} from 'redux-saga/effects';
function* fetchMovies(){
    try {
        const receiveMovies=yield Api.getMoviesFromApi();
        yield put({type:FETCH_SUCCEEDED,receiveMovies:receiveMovies});
    }
    catch(error){
        yield put({type:FETCH_FAILED,error});
    }
}

export function* watchFetchMovies(){
    yield takeLatest(FETCH_MOVIES,fetchMovies);
}