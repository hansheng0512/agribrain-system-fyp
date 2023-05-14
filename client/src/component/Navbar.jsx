import React from 'react';
import {NavLink} from 'react-router-dom'
import logo from '../logo.png'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar is-fixed-top has-shadow is-success" >
              <div className="navbar-brand">
                <NavLink to="/dashboard" className="navbar-item" >
                  <h1 style={{color:"white",fontSize:"30px",fontWeight:"900"}}>AgriBrain</h1>
                </NavLink>
            
                <a href='!#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>

              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="buttons">
                      <button className="button">
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
        </div>
    );
};

export default Navbar;
