import React from 'react';
import TodoListItem from './todo_list_item';

const TodoList = ({todos}) => (
  <ul>
    {todos.map (
      todo => <TodoListItem todo={todo} key={todo.id} />
    )}
  </ul>
);

export default TodoList;
