import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="hero min-h-screen p-5 rounded-xl" style={{ backgroundImage: `url("https://img.freepik.com/free-photo/little-girl-home_1157-17739.jpg?w=740&t=st=1684446437~exp=1684447037~hmac=ec6345191e1c6a281a2cd8fabdc750178abb2243c73d687c80056b180630f744")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Discover More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;