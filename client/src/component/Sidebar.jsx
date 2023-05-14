import React from 'react';
import {NavLink} from "react-router-dom";
import {IoPerson, IoHome,IoLogOut, IoPricetag} from 'react-icons/io5'

const Sidebar = () => {
    return (
        <div>
            <aside className="menu pl-2 has-shadow" >
                <p className="menu-label mt-2">
                    General
                </p>
                <ul className="menu-list">
                    <li><NavLink to={"/dashboard"}> <IoHome/> Dashboard</NavLink></li>
                    <li><NavLink to={"/crop"}><IoPricetag/> Crops</NavLink></li>
                </ul>
                <p className="menu-label">
                    Farmer
                </p>
                <ul className="menu-list">
                    <li>
                        <li><NavLink to={"/user"}><IoPerson/> User</NavLink></li>
                    </li>
                    <li>

                    </li>
                </ul>
                <p className="menu-label">
                    Settings
                </p>
                <ul className="menu-list">
                    <button className="button is-white"><IoLogOut/> Logout</button>
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;
