import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
   
  
  const saveData = (newTodos) => {
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      setTodos(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  const onAddTodo = () => {
    if (newTodo.trim()) {
      let newTodos = [...todos, { todo: newTodo.trim(), id: Date.now() }];
      setTodos(newTodos);
      setNewTodo("");
      saveData(newTodos);
      }};

  const deleteTodo = (id) => {
    let newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    saveData(newTodos);
  };



  return(
    <div className="container mt-5 text-info "> 
      <h2 className="fw-bold fs-1 ">ToDo List</h2>
      <input
        className="form-control form-control-lg text-center "
        autoFocus
        type="text" 
        name="forms" 
        placeholder="Add To Do Item"
        value={newTodo} 
        onChange={(e) => setNewTodo(e.target.value)} 
        onKeyPress={event => {
          if (event.key === 'Enter') {
            onAddTodo()
          }
        }}
        />

        <button className="btn btn-primary btn-block mt-2 " onClick={onAddTodo}>
        {" "}
        Add Here
      </button>

      <TodoItem todos={todos} deletetodo={deleteTodo} />
    </div>

   
    
  );
}
export default TodoList;
