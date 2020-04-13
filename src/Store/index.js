import { createStore, applyMiddleware, combineReducers } from 'redux';
import saga from 'redux-saga';
import homeReducer from '../pages/Home/store/reducer';

// 组合所有的reducer
const reducer = combineReducers({
  home: homeReducer,
});

const getStore = () => {
  return createStore(reducer, applyMiddleware(saga));
}

export default getStore;
