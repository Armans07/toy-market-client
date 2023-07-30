import React, { useContext } from 'react';
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { HiLogin ,HiLogout } from "react-icons/hi";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error));
    }

    return (
        <div className="navbar bg-blue-900 text-white px-4">

            <div className="navbar-start">

                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 text-white font-extrabold rounded-box w-52">
                        <Link to='/'><li><a>Home</a></li></Link>
                        <Link to='/alltoy'><li><a>All Toys</a></li></Link>
                        <Link to='/addtoy'><li><a>Add Toy</a></li></Link>
                        <Link to='/mytoy'><li><a>My Toy</a></li></Link>
                        <Link to='/blog'> <li tabIndex={0}>
                            <a>Blog</a>
                        </li></Link>
                        <Link to='contact'><li><a>Contact</a></li></Link>
                    </ul>
                </div>

                <Link to='/'>
                    <div className='flex items-center justify-center'>
                        <img className='w-14 h-14' src={logo} alt="" />
                        <p className='font-extrabold'>Toy Shop</p>
                    </div></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <Link to='/'><li><a className="hover:text-black font-extrabold">Home</a></li></Link>
                    <Link to='/alltoy'><li ><a className="hover:text-black font-extrabold">All Toys</a></li></Link>
                    <Link to='/addtoy'><li><a className="hover:text-black font-extrabold">Add Toy</a></li></Link>
                    <Link to='/mytoy'><li><a className="hover:text-black font-extrabold">My Toy</a></li></Link>
                    <Link to='/blog'> <li tabIndex={0}>
                        <a className="hover:text-black font-extrabold">Blog</a>
                    </li></Link>
                    <Link to='contact'><li><a className="hover:text-black font-extrabold">Contact</a></li></Link>
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


                {user ?
                    <button onClick={handleLogOut}
                        className="btn btn-sm btn-ghost hover:scale-105"
                    >
                        Logout
                        <HiLogout className='ms-2'></HiLogout>
                    </button> :
                    <Link to='/login'> <button
                        className="btn btn-sm btn-ghost hover:scale-105"
                    >
                        <span className='font-extrabold'>Login</span>
                        <HiLogin className='ms-2'></HiLogin>
                    </button></Link>}

            </div>
        </div>
    );
};

export default Navbar;

// // import React, { useContext } from 'react';
// // import logo from '../../assets/logo.png';
// // import { Link } from 'react-router-dom';
// // import { AuthContext } from '../../AuthProvider/AuthProvider';

// // const Navbar = () => {
// //   const { user, logOut } = useContext(AuthContext);

// //   const handleLogOut = () => {
// //     logOut()
// //       .then()
// //       .catch(error => console.log(error));
// //   };

// //   return (
// //     <nav className="bg-blue-900 text-white py-4">
// //       <div className="container mx-auto px-4">
// //         <div className="flex items-center justify-between">
// //           <Link to='/'>
// //             <div className='flex items-center'>
// //               <img className='w-12 h-12 mr-2' src={logo} alt="" />
// //               <p className='text-xl font-bold'>Toy Shop</p>
// //             </div>
// //           </Link>

// //           {/* Mobile Menu */}
// //           <div className="lg:hidden">
// //             {/* Add your responsive mobile menu toggle icon here */}
// //             {/* Example: <button>Toggle Mobile Menu</button> */}
// //           </div>

// //           {/* Desktop and Tablet Menu */}
// //           <div className="hidden lg:flex space-x-4">
// //             <Link to='/' className="text-white hover:underline">Home</Link>
// //             <Link to='/alltoy' className="text-white hover:underline">All Toys</Link>
// //             <Link to='/addtoy' className="text-white hover:underline">Add Toy</Link>
// //             <Link to='/mytoy' className="text-white hover:underline">My Toy</Link>
// //             <Link to='/blog' className="text-white hover:underline">Blog</Link>
// //             <Link to='/contact' className="text-white hover:underline">Contact</Link>
// //           </div>

// //           <div className="hidden lg:flex space-x-4">
// //             {user && (
// //               <div className="avatar online">
// //                 <div className="w-10 h-10 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
// //                   <img
// //                     title={user.displayName}
// //                     className="h-full w-full object-cover rounded-full"
// //                     src={user.photoURL}
// //                     alt={user.displayName}
// //                   />
// //                 </div>
// //               </div>
// //             )}

// //             {user ? (
// //               <button onClick={handleLogOut} className="btn btn-red">Log Out</button>
// //             ) : (
// //               <Link to='/login'><button className="btn btn-blue">Login</button></Link>
// //             )}
// //           </div>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;

// import React, { useContext, useState } from 'react';
// import logo from '../../assets/logo.png';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../AuthProvider/AuthProvider';
// import { HiAdjustments, HiArchive } from "react-icons/hi";

// const Navbar = () => {
//     const { user, logOut } = useContext(AuthContext);
//     const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

//     const handleLogOut = () => {
//         logOut()
//             .then()
//             .catch(error => console.log(error));
//     };

//     const toggleMobileMenu = () => {
//         setMobileMenuOpen(!isMobileMenuOpen);
//     };

//     return (
//         <nav className="bg-blue-900 text-white py-4">
//             <div className="container mx-auto px-4">
//                 <div className="flex items-center justify-between">
//                     <Link to='/'>
//                         <div className='flex items-center'>
//                             <img className='w-12 h-12 mr-2' src={logo} alt="" />
//                             <p className='text-xl font-bold'>Toy Shop</p>
//                         </div>
//                     </Link>

//                     {/* Mobile Menu Toggle Icon */}
//                     <div className="lg:hidden">
//                         <button onClick={toggleMobileMenu}>
//                             <i className="fas fa-bars"><HiAdjustments /></i>
//                             <button className="btn btn-blue">Login</button>
//                             <div className="hidden lg:flex space-x-4">
//                                 {user && (
//                                     <div className="avatar online">
//                                         <div className="w-10 h-10 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
//                                             <img
//                                                 title={user.displayName}
//                                                 className="h-full w-full object-cover rounded-full"
//                                                 src={user.photoURL}
//                                                 alt={user.displayName}
//                                             />
//                                         </div>
//                                     </div>
//                                 )}

//                                 {user ? (
//                                     <button onClick={handleLogOut} className="btn btn-red">Log Out</button>
//                                 ) : (
//                                     <Link to='/login'><button className="btn btn-blue">Login</button></Link>
//                                 )}
//                             </div>


//                             {/* For other icon libraries or custom SVGs, replace the above line with your icon */}
//                         </button>
//                     </div>

//                     {/* Desktop and Tablet Menu */}
//                     <div className={`hidden lg:flex space-x-4 ${isMobileMenuOpen ? 'hidden' : 'flex'}`}>
//                         <Link to='/' className="text-white hover:underline">Home</Link>
//                         <Link to='/alltoy' className="text-white hover:underline">All Toys</Link>
//                         <Link to='/addtoy' className="text-white hover:underline">Add Toy</Link>
//                         <Link to='/mytoy' className="text-white hover:underline">My Toy</Link>
//                         <Link to='/blog' className="text-white hover:underline">Blog</Link>
//                         <Link to='/contact' className="text-white hover:underline">Contact</Link>
//                     </div>

//                     {/* Mobile Menu */}
//                     {isMobileMenuOpen && (
//                         <div className="lg:hidden">
//                             <ul className="space-y-2">
//                                 <li><Link to='/' className="text-white hover:underline block">Home</Link></li>
//                                 <li><Link to='/alltoy' className="text-white hover:underline block">All Toys</Link></li>
//                                 <li><Link to='/addtoy' className="text-white hover:underline block">Add Toy</Link></li>
//                                 <li><Link to='/mytoy' className="text-white hover:underline block">My Toy</Link></li>
//                                 <li><Link to='/blog' className="text-white hover:underline block">Blog</Link></li>
//                                 <li><Link to='/contact' className="text-white hover:underline block">Contact</Link></li>
//                             </ul>
//                         </div>
//                     )}

//                     <div className="hidden lg:flex space-x-4">
//                         {user && (
//                             <div className="avatar online">
//                                 <div className="w-10 h-10 rounded-full ring ring-white ring-offset-base-100 ring-offset-2">
//                                     <img
//                                         title={user.displayName}
//                                         className="h-full w-full object-cover rounded-full"
//                                         src={user.photoURL}
//                                         alt={user.displayName}
//                                     />
//                                 </div>
//                             </div>
//                         )}

//                         {user ? (
//                             <button onClick={handleLogOut} className="btn btn-red">Log Out</button>
//                         ) : (
//                             <Link to='/login'><button className="btn btn-blue">Login</button></Link>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
