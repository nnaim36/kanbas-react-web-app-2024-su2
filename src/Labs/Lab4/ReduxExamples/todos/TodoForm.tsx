import React from "react";
import { UseSelector,useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo, setTodo } from "../todos/todosReducer";

export default function TodoForm() {
    const {todo} = useSelector((state:any ) =>state.todosReducer);
    const dispatch = useDispatch();
    return (
      <li className="list-group-item d-flex align-items-center">
        <input value={todo.title} className="form-control"
          onChange={ (e) => dispatch(setTodo({ ...todo, title: e.target.value }) )}/>
          <button className="btn btn-lg btn-warning m-2" onClick={() => updateTodo(todo)}
                id="wd-update-todo-click"> Update </button>
        <button className="btn btn-lg btn-success m-2" onClick={() => dispatch(addTodo(todo))}
                id="wd-add-todo-click"> Add </button>


      </li>
    );
  }
  