import React from 'react'
import { Link } from 'react-router-dom'

function Science() {
  return (
    <div >
    <div class="row"  style={{width: "30rem", margin: "10rem", height: "20rem", marginLeft: "35rem"}}>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Physics</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <a href="#" class="btn btn-primary">Add Notes</a>
        <a href="#" class="btn btn-primary">View Notes</a>
        <a href="#" class="btn btn-primary">Delete Notes</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Chemistry</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Edit/Delete/View
            </Link>
            <ul class="dropdown-menu">
              <li><Link class="dropdown-item" to="./Maths.js">Edit</Link></li>
              <li><Link class="dropdown-item" to="./English.js">View</Link></li>
              <li><Link class="dropdown-item" to="./Science.js">Delete</Link></li>
            </ul>
          </li>
      </div>
    </div>
    <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Biology</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
        <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Edit/Delete/View
            </Link>
            <ul class="dropdown-menu">
              <li><Link class="dropdown-item" to="./Maths.js">Edit</Link></li>
              <li><Link class="dropdown-item" to="./English.js">View</Link></li>
              <li><Link class="dropdown-item" to="./Science.js">Delete</Link></li>
            </ul>
          </li>
      </div>
    </div>
  </div>
  </div>
</div>
</div>
  )
}

export default Science