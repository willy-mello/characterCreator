import ACTIONS from './store'

const defaultState = {
  routes: []
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.GET_ROUTE: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, description: item };
      let newState = { ...state, newItem }
      newState.items.push(newItem);
      return newState;
    }



    default:
      return state;
  }
};

export default todoReducer;