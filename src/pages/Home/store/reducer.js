import { CHANGE_LIST } from './contants';

const defaultState = {
  newsList: [],
  name: 'cici',
};

export default(state = defaultState, action) => {
  switch(action.type) {
    case CHANGE_LIST:
      return {
        ...state,
        newsList: action.newsList,
      };
    default:
      return state;
  }
}
