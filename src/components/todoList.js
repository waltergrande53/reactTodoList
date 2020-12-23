import React from "react";
import Todo from "./todo";
export default function todoList({ todos, setTodos }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {todos.map((todo) => (
          <Todo
            setTodos={setTodos}
            todos={setTodos}
            todo={todo}
            text={todo.text}
            key={todo.id}
          />
        ))}
      </ul>
    </div>
  );
}
