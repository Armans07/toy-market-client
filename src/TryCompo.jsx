<form onSubmit={handleRegister} >
<div className="hero min-h-screen bg-base-200 ">
    <div className="hero-content flex-col">
        <h1 className="text-5xl font-semibold mb-5">Please Register!</h1>
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