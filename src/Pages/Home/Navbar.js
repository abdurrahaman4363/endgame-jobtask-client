import React from 'react';
import {Link } from "react-router-dom";

const Navbar = () => {
    const navManu = <>
        <Link to="/task"> <li><a>Task</a></li></Link>
       <Link to="/todo"> <li><a>ToDo</a></li></Link>
      <Link to="/calendar">  <li><a>Calender</a></li></Link>
    </>
    return (
        <div>
            <div class="navbar bg-gray-900 text-white">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-gray-900 text-white">
                            
                            {
                                navManu
                            }
                        </ul>
                    </div>
                    <a class="btn btn-ghost normal-case text-xl"></a>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                       
                        {navManu}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;