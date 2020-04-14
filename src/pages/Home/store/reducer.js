const defaultState = {
  newsList: [],
  name: 'cici',
};

export default(state = defaultState, action) => {
  switch(action.type) {
    case 'change_home_list':
      return {
        ...state,
        newsList: action.newsList,
      }; 
    default:
      return state;
  }
}
