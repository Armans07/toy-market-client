// import React, { useContext } from 'react';
// import { FaGoogle } from "react-icons/fa";
// import loginImg from '../../assets/20547283_6310507.jpg'
// import { AuthContext } from '../../AuthProvider/AuthProvider';
// import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
// import app from '../../firebase/firebase.config';
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// const Login = () => {
//     const auth = getAuth(app)
//     const googleProvider = new GoogleAuthProvider();
//     const { signIn } = useContext(AuthContext);
//     const navigate = useNavigate();
//     const location = useLocation();
//     console.log(location)

//     const from = location.state?.from?.pathname || '/'

//     const handleGoogleSignIn = () => {
//         signInWithPopup(auth, googleProvider)
//             .then(result => {
//                 const loggedUser = result.user;
//                 console.log(loggedUser);
//                 navigate('/')
//             })
//             .catch(error => {
//                 console.log('error', error.message)
//             })

//     }

//     const handleLogin = event => {
//         event.preventDefault();
//         const form = event.target;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(email, password);

//         signIn(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user)

//                 navigate(from,{replace: true})
//             })
//             .catch(error => console.log(error))
//     }
//     return (
//         <div>
//             <form onSubmit={handleLogin}>
//                 <div className="justify-center hero min-h-screen bg-base-200 ">
//                     <div>
//                         <img className='h-1/2 w-1/2' src={loginImg} alt="" />
//                     </div>
//                     <div className="hero-content flex-col">
//                         <h1 className="text-5xl font-semibold mb-5">Login now!</h1>
//                         <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                             <div className="card-body">
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Email</span>
//                                     </label>
//                                     <input type="text" name='email' placeholder="email" className="input input-bordered" />
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Password</span>
//                                     </label>
//                                     <input type="password" name='password' placeholder="password" className="input input-bordered" />

//                                 </div>
//                                 <div className="form-control mt-6">
//                                     <input className="btn btn-primary" type="submit" value="Login" />

//                                 </div>
//                                 <label className="label">
//                                     <p>Don't have an account? <Link to='/register'className="label-text-alt link link-hover">Register</Link></p>
//                                 </label>
//                                 <div className="divider">OR</div>
//                                 <div className='mx-auto'>

//                                     <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
//                                         <p className='text-xl text-green-600'>G</p>
//                                     </button>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </form>
//         </div>
//     );
// };

// export default Login;

import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import loginImg from '../../assets/20547283_6310507.jpg';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);

    const from = location.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const loggedUser = result.user;
                console.log(loggedUser);
                navigate('/');
            })
            .catch((error) => {
                console.log('error', error.message);
            });
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);

                navigate(from, { replace: true });
            })
            .catch((error) => console.log(error));
    };

    return (

        <section class="flex flex-col md:flex-row h-screen items-center p-8 my-2">
            <div class="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                <img src={loginImg} alt="" class="w-full h-full object-cover" />
            </div>
            <div class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
            flex items-center justify-center">

                <div class="w-full h-100">
                    <h1 class="text-xl md:text-3xl font-semibold leading-tight mt-12 text-center">Log in to your account!</h1>

                    <form onSubmit={handleLogin} class="mt-8">

                        <div className="mb-4">
                            <label className="block mb-2 text-sm font-semibold text-gray-800 ">Email address</label>
                            <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                            </svg>
                            <input class="pl-2 outline-none border-none"   id="" placeholder="Email Address"  type="text" name='email' required />
                            
                        </div>
                        </div>

                        <div className="mb-6">
                            <label className="block mb-2 text-sm font-semibold text-gray-800">Password</label>
                            <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path fill-rule="evenodd"
                                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                    clip-rule="evenodd" />
                            </svg>
                            <input class="pl-2 outline-none border-none" type="password" name='password' placeholder="password" />
                        </div>
                        </div>

                        <div class="text-right mt-2">
                            <a href="#" class="text-sm font-semisemibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                        </div>

                        <button type="submit" class="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semisemibold rounded-lg
                  px-4 py-3 mt-6">Log In</button>
                    </form>


                    <div className='flex justify-center items-center gap-2'>
                        <hr class="my-6 border-gray-300 w-36" />
                        <div className="text-center">OR</div>
                        <hr class="my-6 border-gray-300 w-36" />
                    </div>

                    <button type="button" class="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semisemibold rounded-lg px-4 py-3 border border-gray-300">
                        <div class="flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" class="w-6 h-6" viewBox="0 0 48 48"><defs><path id="a" d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z" /></defs><clipPath id="b"><use href="#a" overflow="visible" /></clipPath><path clip-path="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" /><path clip-path="url(#b)" fill="#EA4335" d="M0 11l17 13 7-6.1L48 14V0H0z" /><path clip-path="url(#b)" fill="#34A853" d="M0 37l30-23 7.9 1L48 0v48H0z" /><path clip-path="url(#b)" fill="#4285F4" d="M48 48L17 24l-4-3 35-10z" /></svg>
                            <button onClick={handleGoogleSignIn}>
                            <span class="ml-4">
                                Log in
                                with
                                Google</span>
                            </button>
                        </div>
                    </button>

                    <p className="text-sm mt-2 text-center">Need an account? <a href="register" class="text-blue-500 hover:text-blue-700 font-semisemibold">Create an
                        account</a></p>


                </div>
            </div>

        </section>
    );
};

export default Login;
