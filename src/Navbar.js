import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div><nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <Link class="navbar-brand" to="/">Web Brains</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          
          {/* <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              List of Subjects
            </Link>
            <ul class="dropdown-menu">
              <li><Link class="dropdown-item" to="./Maths.js">Maths</Link></li>
              <li><Link class="dropdown-item" to="./English.js">English</Link></li>
              <li><Link class="dropdown-item" to="./Science.js">Science</Link></li>
            </ul>
          </li> */}
        </ul>
      </div>
    </div>
  </nav></div>
  )
}

export default Navbar