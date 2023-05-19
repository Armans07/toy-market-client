import React from 'react';

const Blog = () => {
    return (
        <div className="flex flex-col w-full lg:flex-row">
        <div className="grid flex-grow h-60 card bg-base-300 rounded-box place-items-center">
            <div>
            <h2 className='text-center'>Question</h2>
            <li>What is an access token and refresh token? How do they work and where should we store them on the client-side?</li>
            <li></li>
            <li></li>
            <li></li>
            </div>
            </div> 
        <div className="divider lg:divider-horizontal">OR</div> 
        <div className="grid flex-grow h-32 card bg-base-300 rounded-box place-items-center">
            <div>
                <h2>Ans</h2>
                <li>A refresh token is a special key that enables a client for an API or service to retrieve new access tokens without requiring the user to perform a complete login. In other words, an application can exchange a valid refresh token for a new access token. In addition to the new access token, the service may return a new refresh token too.</li>
                <li></li>
                <li></li>
                <li></li>
            </div>
        </div>
      </div>
    );
};

export default Blog;