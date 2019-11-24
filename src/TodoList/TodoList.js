import React, { Component } from 'react';
import TodoListUi from './TodoListUi';
import { connect } from 'react-redux';
import axios from 'axios';
import { changeInputAction, addItemAction, deleteItemAction, getListAction } from '../store/actionCreator';

class TodoList extends Component {
  componentDidMount(){
    this.props.getList();
  }

  render() { 
    return (
      <TodoListUi
        inputValue={this.props.inputValue}
        addList={this.props.addList}
        deleteItem={this.props.deleteItem}
        inputChange={this.props.inputChange}
        list={this.props.list}
      />
    );
  }
}
 const mapStateToProps = (state) => {
   return {
     inputValue: state.inputValue,
     list: state.list
   }
 }
 const mapDispatchToProps = (dispatch) => {
   return {
    getList(){
      axios.get('https://www.easy-mock.com/mock/5dda2490f2b7914af934a653/example/mock')
        .then(res => {
          const data = res.data.data;
          const action = getListAction(data);
          dispatch(action);
        })
    },
    inputChange(e) {
      const action = changeInputAction(e.target.value);
      dispatch(action);
    },
    addList(){
      dispatch(addItemAction())
    },
    deleteItem(index){
      dispatch(deleteItemAction(index))
    }
   }
 }
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);