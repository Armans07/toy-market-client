import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import loginImg from '../../assets/20547283_6310507.jpg'
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../firebase/firebase.config';
import { Link } from 'react-router-dom';

const Login = () => {
    const auth = getAuth(app)
    const googleProvider = new GoogleAuthProvider();
    const { signIn } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log('error', error.message)
            })
    }

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <form onSubmit={handleLogin}>
                <div className="justify-center hero min-h-screen bg-base-200 ">
                    <div>
                        <img className='h-1/2 w-1/2' src={loginImg} alt="" />
                    </div>
                    <div className="hero-content flex-col">
                        <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />

                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Login" />

                                </div>
                                <label className="label">
                                    <p>Don't have an account? <Link to='/register'className="label-text-alt link link-hover">Register</Link></p>
                                </label>
                                <div className="divider">OR</div>
                                <div className='mx-auto'>

                                    <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                                        <p className='text-xl text-green-600'>G</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;