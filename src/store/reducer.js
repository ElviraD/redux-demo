import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes';
const defaultStore = {
  inputValue: '清单',
  list: []
};

export default (state = defaultStore, action) => {
  switch(action.type) {
    case GET_LIST:
      return {...state, list: action.data.list }
    case CHANGE_INPUT:
      return {...state, inputValue: action.value }
    case ADD_ITEM:
      const addList= state.inputValue ? [...state.list, state.inputValue] : state.list;
      return {...state, list: addList, inputValue: '' };
    case DELETE_ITEM:
      const List = state.list;
      List.splice(action.index,1);
      return {...state, list: List };
    default:
      return state
  }
}