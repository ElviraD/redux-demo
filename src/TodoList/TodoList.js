import React, { Component } from 'react';
import store from '../store/index';
import TodoListUi from './TodoListUi';
import axios from 'axios';
import { changeInputAction, addItemAction, deleteItemAction, getListAction } from '../store/actionCreator';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.inputChange = this.inputChange.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.addList = this.addList.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
    store.subscribe(this.storeChange);
  }
  componentDidMount(){
    axios.get('https://www.easy-mock.com/mock/5dda2490f2b7914af934a653/example/mock')
      .then(res => {
        const data = res.data.data;
        const action = getListAction(data);
        store.dispatch(action);
      })
  }

  inputChange(e) {
    const action = changeInputAction(e.target.value);
    store.dispatch(action);
  }
  storeChange(){
    this.setState(store.getState())
  }
  addList(){
    store.dispatch(addItemAction())
  }
  deleteItem(index){
    store.dispatch(deleteItemAction(index))
  }
  render() { 
    return (
      <TodoListUi
        inputValue={this.state.inputValue}
        addList={this.addList}
        deleteItem={this.deleteItem}
        inputChange={this.inputChange}
        list={this.state.list}
      />
    );
  }
}
 
export default TodoList;