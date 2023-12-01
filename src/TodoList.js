import React from 'react';
import Todo from "./Todo";

const TodoList2 = ({ todos, toggleTodo }) => {
  return todos.map((todo) => (
     <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />
  ));
};

export default TodoList2;  