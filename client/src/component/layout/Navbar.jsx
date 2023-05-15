import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  }


  const menuItemStyle = {
    color: "white",
    hover:"none",
  };

  return (
      <div>
        <nav className="navbar is-fixed-top " style={{backgroundColor: "#71AF9D"}}>
          <div className="navbar-brand">
            <NavLink to="/agribrain" className="navbar-item">
              <h1 style={{color: "white", fontSize: "35px", fontWeight: "900", marginLeft:"1vw"}}>AgriBrain</h1>
            </NavLink>
            <a role="button" className={`navbar-burger burger ${isBurgerOpen ? 'is-active' : ''}`} aria-label="menu"
               aria-expanded="false"
               data-target="navbarBasicExample"
               onClick={toggleBurger}
               style={{color:"white", marginTop:"2vh"}}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>

          <div id="navbarBasicExample" className={`navbar-menu ${isBurgerOpen ? 'is-active' : ''}`} style={{backgroundColor:"#71AF9D"}}>
            <div className="navbar-end" style={{fontWeight: 'bold', marginRight: "2vw"}}>
              <NavLink to="/dashboard" className="navbar-item" onClick={toggleBurger} style={menuItemStyle}>
                Dashboard
              </NavLink>
              <NavLink to="/sensor-monitoring" className="navbar-item" onClick={toggleBurger} style={menuItemStyle}>
                Sensor Monitoring
              </NavLink>
              <NavLink to="/climate-condition" className="navbar-item" onClick={toggleBurger} style={menuItemStyle}>
                Climate Condition
              </NavLink>
              <NavLink to="/precision-farming" className="navbar-item" onClick={toggleBurger} style={menuItemStyle}>
                Precision Farming
              </NavLink>
              <NavLink to="/data-analytics" className="navbar-item" onClick={toggleBurger} style={menuItemStyle}>
                Data Analytics
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
  );
};

export default Navbar;
