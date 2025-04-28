import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
    let [todos, setTodos] = useState([]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos([...todos, { task: newTodo, id: uuidv4(), isDone: false }]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    let upperCaseAll = () => {
        setTodos((todos) =>
            todos.map((todo) => ({
                ...todo,
                task: todo.task.toUpperCase(),
            }))
        );
    };

    let lowerCaseAll = () => {
        setTodos((todos) =>
            todos.map((todo) => ({
                ...todo,
                task: todo.task.toLowerCase(),
            }))
        );
    };

    let toggleTaskDone = (id) => {
        setTodos((todos) =>
            todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            )
        );
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Add A Task"
                value={newTodo}
                onChange={updateTodoValue}
            />
            <br />
            <br />
            <button onClick={upperCaseAll}>Uppercase All</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={addNewTask}>Add Task</button>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={lowerCaseAll}>Lowercase All</button>
            <br />
            <hr />
            <h3>Tasks Todo</h3>
            <ul style={{ listStyleType: "none", padding: 0 }}>
                {todos.map((todo) => (
                    <li key={todo.id} style={{ marginBottom: "10px" }}>
                    <button onClick={() => toggleTaskDone(todo.id)}style={{ marginRight: "10px" }}>Task_Done</button>
                    <span 
                        style={{ 
                            textDecoration: todo.isDone ? "line-through" : "none", 
                            marginRight: "10px"}}>
                        {todo.task}
                    </span>
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
                ))}
            </ul>

        </div>
    );
}
