import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST } from './actionTypes';
const defaultStore = {
  inputValue: '清单',
  list: [
    'Redux学习',
    '三大原则',
    
  ]
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
      // const List = JSON.parse(JSON.stringify(state.list));
      // List.splice(action.index,1);
      // return {...state, list: List };
      return {...state, list: [...state.list.slice(0,action.index), ...state.list.slice(action.index + 1)] };
    default:
      return state
  }
}