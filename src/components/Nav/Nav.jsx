import React from 'react';
import { NavLink } from 'react-router';

const Nav = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">

                <li> <NavLink to={'/'}> Home </NavLink></li>
                <li> <NavLink to={'/signup'}> sign up </NavLink></li>
                <li> <NavLink to={'/login'}> log in </NavLink></li>
                </ul>
            </div>
        </div>
    );
};

export default Nav;










