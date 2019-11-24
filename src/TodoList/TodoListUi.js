import React from 'react';
import { Input, Button, List } from 'antd';
import 'antd/dist/antd.css';
import './index.css'

const TodoListUi = (props) => {
  return (
    <div className="container">
      <div>
        <Input
          placeholder={props.inputValue}
          onChange={props.inputChange}
          style={{width: '250px',marginRight: '10px'}}
          value={props.inputValue}
          allowClear
        />
        <Button type='primary' onClick={props.addList}>增加</Button>
      </div>
      <div className="list">
        <List
          bordered
          dataSource={props.list}
          renderItem={(item,index) => (<List.Item onClick={() => props.deleteItem(index)}>{index+1}. {item}</List.Item>)}
        />
      </div>
    </div>
  );
}
export default TodoListUi;