import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducer as homeReducer } from '../pages/Home/store';
import { rootSaga as homeSaga } from '../pages/Home/store';

// 组合所有的reducer
const reducer = combineReducers({
  home: homeReducer,
});

const sagaMiddleware = createSagaMiddleware();

export const getStore = () => {
  // 改变服务器端store的内容，那么就一定要使用serverAxios
  return {
    ...createStore(reducer, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(homeSaga),
  }
};

export const getClientStore = () => {
  const defaultState = Object.assign({}, window.context.state);
  // 改变客户端store的内容，一定要使用clientAxios
  return {
    ...createStore(reducer, defaultState, applyMiddleware(sagaMiddleware)),
    runSaga: sagaMiddleware.run(homeSaga),
  }
};
