import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{ margin: "0 2vh"}}>
        <div className="container">
          <Link className="navbar-brand" to="/">
            <h4>central.edu.gh</h4>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#">Student</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Staff</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Alumni</a>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <Link to="" className='pill-button' style={{ textDecoration: 'none'}}>
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
