// import React, {Component} from 'react';

// import {createStore, applyMiddleware} from 'redux';
// import {Provider} from 'react-redux';
// import MovieContainer from './containers/MovieContainer';

// const sagaMiddleware = createSagaMiddleware();
// let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
// const App = () => {
//   <Provider store={store}>
//     <MovieContainer />
//   </Provider>;
// };
// export default App;

import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import MovieContainer from './containers/MovieContainer';
import allReducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/rootSaga';
const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MovieContainer />
      </Provider>
    );
  }
}
sagaMiddleware.run(rootSaga);
export default App;
