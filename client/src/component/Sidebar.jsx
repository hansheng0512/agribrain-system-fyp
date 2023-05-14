import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {IoHome, IoLogOut, IoPerson, IoPricetag} from 'react-icons/io5'
import {useDispatch, useSelector} from "react-redux";
import {LogoutUser, reset} from "../features/authSlice";

const Sidebar = () => {
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
            <aside className="menu pl-2 has-shadow">
                <p className="menu-label mt-2">
                    General
                </p>
                <ul className="menu-list">
                    <li><NavLink to={"/dashboard"}> <IoHome/> Dashboard</NavLink></li>
                    <li><NavLink to={"/crop"}><IoPricetag/> Crops</NavLink></li>
                </ul>
                {user && user.user.user_role === 'Farmer' && (
                    <div>
                        <p className="menu-label">
                            Administration
                        </p>
                        <ul className="menu-list">
                            <li>
                                <li><NavLink to={"/user"}><IoPerson/> User</NavLink></li>
                            </li>
                            <li>

                            </li>
                        </ul>
                    </div>
                )}
                <p className="menu-label">
                    Settings
                </p>
                <ul className="menu-list">
                    <button onClick={logout} className="button is-white"><IoLogOut/> Logout</button>
                </ul>
            </aside>
        </div>
    );
};

export default Sidebar;
