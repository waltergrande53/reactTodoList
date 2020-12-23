import React, { useState } from "react";
import "./app.css";
import Form from "./components/Form";
import Todolist from "./components/todoList";
export default function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
      />
      <Todolist setTodos={setTodos} todos={todos} />
    </div>
  );
}
