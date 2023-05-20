import React, { useContext } from 'react';
import logo from '../../assets/7579208_42318-removebg-preview.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <Link to='/'><li><a>Home</a></li></Link>
                    <Link to='/alltoy'><li><a>All Toys</a></li></Link>
                    <Link to='/addtoy'><li><a>Add Toy</a></li></Link>
                    <Link to='/blog'> <li tabIndex={0}>
                        <a>Blog</a>
                    </li></Link>
                    <Link to='contact'><li><a>Contact</a></li></Link>
                    </ul>
                </div>
                <Link to={'/'}> <div className='flex align-middle gap-2'>
                    <img className='w-14 h-18' src={logo} alt="" />
                    <p className='mt-2 font-bold text-lg'>Toy Shop</p>
                </div></Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to='/'><li><a>Home</a></li></Link>
                    <Link to='/alltoy'><li><a>All Toys</a></li></Link>
                    <Link to='/addtoy'><li><a>Add Toy</a></li></Link>
                    <Link to='/blog'> <li tabIndex={0}>
                        <a>Blog</a>
                    </li></Link>
                    <Link to='contact'><li><a>Contact</a></li></Link>
                </ul>
            </div>
            <div className="navbar-end flex gap-3">
                {
                    user &&
                    <div className="avatar online">
                        <div className="w-18 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img title={user.displayName} style={{ height: '2rem' }} src={user.photoURL} />
                        </div>
                    </div>
                }


                {user ? <button onClick={handleLogOut} className="btn">Log Out</button> :
                    <Link to='/login'> <button className="btn">Login</button></Link>}

            </div>
        </div>
    );
};

export default Navbar;