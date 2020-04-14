import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer as homeReducer } from '../pages/Home/store';

const getStore = () => {
  // 组合所有的reducer
  const reducer = combineReducers({
    home: homeReducer,
  });

  const sagaMiddleware = createSagaMiddleware();
  return {
    ...createStore(reducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run
  }
}

export default getStore;
