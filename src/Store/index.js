import { createStore, applyMiddleware } from 'redux';
import saga from 'redux-saga';

const reducer = (state = {name: 'dell'}, action) => {
  return state;
};

const getStore = () => {
  return createStore(reducer, applyMiddleware(saga));
}

export default getStore;
