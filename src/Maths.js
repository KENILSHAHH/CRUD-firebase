import React from 'react'
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

import { db } from "./firebase";
import { uid } from "uid";
import { set, ref, onValue, remove, update } from "firebase/database";


function Maths() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [tempUuid, setTempUuid] = useState("");

  const handleTodoChange = (e) => {
    setTodo(e.target.value);
  };

  //read
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      setTodos([]);
      const data = snapshot.val();
      if (data !== null) {
        Object.values(data).map((todo) => {
          setTodos((oldArray) => [...oldArray, todo]);
        });
      }
    });
  }, []);

  //write
  const writeToDatabase = () => {
    const uuid = uid();
    set(ref(db, `/${uuid}`), {
      todo,
      uuid,
    });

    setTodo("");
  };

  //update
  const handleUpdate = (todo) => {
    setIsEdit(true);
    setTempUuid(todo.uuid);
    setTodo(todo.todo);
  };

  const handleSubmitChange = () => {
    update(ref(db, `/${tempUuid}`), {
      todo,
      uuid: tempUuid,
    });

    setTodo("");
    setIsEdit(false);
  };

  //delete
  const handleDelete = (todo) => {
    remove(ref(db, `/${todo.uuid}`));
  };
  return (
    <div >
    <div class="row"  style={{width: "30rem", margin: "10rem", height: "20rem", marginLeft: "35rem"}}>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Algebra</h5>
        <p class="card-text">Add your notes below</p>
        
            <input   type="text" value={todo} onChange={handleTodoChange} role="button" />
              
            {isEdit ? (
        <>
          <button onClick={handleSubmitChange}>Submit Change</button>
          <button
            onClick={() => {
              setIsEdit(false);
              setTodo("");
            }}
          >
            
          </button>
        </>
      ) : (
        <button class="btn btn-primary" onClick={writeToDatabase}>submit</button>
      )}
            
            {todos.map((todo) => (
              <>
          <h1>{todo.todo}</h1>
          <button onClick={() => handleUpdate(todo)}>update</button>
          <button onClick={() => handleDelete(todo)}>delete</button>
              </>
              ))}
            
         
      </div>
    </div>
  </div>
  {/* <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Geometry</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Edit/Delete/View
            </Link>
            <ul class="dropdown-menu">
            {todos.map((todo) => (
              <>
              <li><Link class="dropdown-item" onClick={() => handleUpdate(todo)} to="./Edit">Edit</Link></li>
              <li><Link class="dropdown-item" onClick={() => handleUpdate(todo)} to="./English.js">View</Link></li>
              <li><Link class="dropdown-item" onClick={() => handleUpdate(todo)} to="./Science.js">Delete</Link></li>
              </>
              ))}
            </ul>
          </li>
      </div>
    </div>
  </div> */}
</div>
</div>
  )
}

export default Maths
