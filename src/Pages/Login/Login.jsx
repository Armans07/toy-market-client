import React from 'react';
import { FaBeer, FaGoogle } from "react-icons/fa";

const Login = () => {
    return (
        <div>
            <h2>Please Login</h2>
            <div className="hero min-h-screen bg-base-200 ">
                <div className="hero-content flex-col">
                    <h1 className="text-5xl font-bold mb-5">Login now!</h1>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" />

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <label className="label">
                                <p>Don't have an account? <a href="/register" className="label-text-alt link link-hover">Register</a></p>
                            </label>
                            <div className="divider">OR</div>
                            <div>
                                <button className="btn btn-circle btn-outline my-auto">
                                    <FaGoogle></FaGoogle>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;