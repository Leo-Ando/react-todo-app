import { useState, useRef, FunctionComponent } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string;
  name: string;
  completed: boolean;
};

const App: FunctionComponent = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoNameRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = () => {
    const name = todoNameRef.current?.value;
    if (name === "") return;
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), name: name, completed: false }
    ]);
    todoNameRef.current!.value = null;
  };

  const toggleTodo = (id: string) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      setTodos(newTodos);
    }
  };

  const handleClear = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  return (
    <div>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
    </div>
  );
};

export default App;
