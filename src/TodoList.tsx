import React from "react";
import Todo from "./Todo";

// ToDoアイテムの型を定義
type TodoItem = {
  id: string;
  name: string;
  completed: boolean;
};

// TodoList2のPropsの型を定義
type TodoListProps = {
  todos: TodoItem[];
  toggleTodo: (id: string) => void;
};

const TodoList2 = ({ todos, toggleTodo }: TodoListProps) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList2;
