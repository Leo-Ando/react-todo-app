import React from "react";

// Todoアイテムの型定義
type TodoItem = {
  id: string;
  name: string;
  completed: boolean;
};

// TodoコンポーネントのPropsの型定義
type TodoProps = {
  todo: TodoItem;
  toggleTodo: (id: string) => void;
};

const Todo: React.FC<TodoProps> = ({ todo, toggleTodo }) => {
  const handleTodoClick = () => {
    toggleTodo(todo.id);
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={todo.completed}
          readOnly
          onChange={handleTodoClick}
        />
      </label>
      {todo.name}
    </div>
  );
};

export default Todo;
