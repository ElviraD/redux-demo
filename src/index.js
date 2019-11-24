import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from "./TodoList/TodoList";
// import { Provider } from 'react-redux';
// import store from './store';


ReactDOM.render(
  // <Provider store={store}>
  //   <TodoList />
  // </Provider>,
    <TodoList />,
document.getElementById('root'));
