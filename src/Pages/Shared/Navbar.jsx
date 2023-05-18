import React from 'react';
import logo from '../../assets/7579208_42318-removebg-preview.png'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">Blogs</a>
                        </li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <Link to={'/'}> <div className='flex align-middle gap-2'>
                    <img className='w-14 h-18' src={logo} alt="" />
                    <p className='mt-2 font-bold text-lg'>Toy Shop</p>
                </div></Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li tabIndex={0}>
                        <a>Blog</a>
                    </li>
                    <li><a>Contact</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Navbar;