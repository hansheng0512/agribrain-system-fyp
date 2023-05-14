import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from "react-redux";
import {LogoutUser, reset} from "../features/authSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {user} = useSelector((state) => state.auth);

  const logout = () => {
    dispatch(LogoutUser());
    dispatch(reset());
    navigate("/");
  }
  return (
      <div>
        <nav className="navbar is-fixed-top has-shadow is-success">
          <div className="navbar-brand">
            <NavLink to="/dashboard" className="navbar-item">
              <h1 style={{color: "white", fontSize: "30px", fontWeight: "900"}}>AgriBrain</h1>
            </NavLink>

            <a href='!#' role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
               data-target="navbarBasicExample">
              <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                  <span aria-hidden="true"></span>
                </a>
              </div>

              <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-end">
                  <div className="navbar-item">
                    <div className="buttons">
                      <button onClick={logout} className="button">
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
