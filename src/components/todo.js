import React from "react";
export default function Todo({ todo, text, todos, setTodos }) {
  //events
  const deleletHandler = () => {
    setTodos(todos.map((el) => el.id !== todo.id));
  };
  return (
    <div className="todo">
      <li className="todo-item">{text}</li>
      <button className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleletHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
