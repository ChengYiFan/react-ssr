import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer as homeReducer } from '../pages/Home/store';

// 组合所有的reducer
const reducer = combineReducers({
  home: homeReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const getStore = () => {
  return {
    ...createStore(reducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run
  }
};

export const getClientStore = () => {
  const defaultState = Object.assign({}, window.context.state);
  return {
    ...createStore(reducer, defaultState, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run
  }
};
