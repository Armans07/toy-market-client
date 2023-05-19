import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Register = () => {

    const { createUser,updateUserProfile } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photourl.value;
        console.log(name, email, password, photoUrl);

        createUser(email,password)
        .then(result=>{
            const user = result.user;
            updateUserProfile(user, name, photoUrl);
            console.log(user);
        })
        .catch(error => console.log(error))

    }
    return (
        <div>
            <form onSubmit={handleRegister} >
                <div className="hero min-h-screen bg-base-200 ">
                    <div className="hero-content flex-col">
                        <h1 className="text-5xl font-bold mb-5">Please Register!</h1>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                            <div className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name='photourl' placeholder="PhotoURL" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn btn-primary" type="submit" value="Register" />

                                </div>
                                <label className="label">
                                    <p>Already have an account? <a href="/login" className="label-text-alt link link-hover">Login</a></p>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;