import React from 'react';

const Blog = () => {
    return (
        <div className='p-5'>

        <p className='text-xl mb-0'>1. What is an access token and refresh token? How do they work and where should we store them on the client-side?</p>
        <h5>Answer : <span className='text-success'>Access Token: A refresh token is a special key that enables a client for an API or service to retrieve new access tokens without requiring the user to perform a complete login. In other words, an application can exchange a valid refresh token for a new access token. In addition to the new access token, the service may return a new refresh token too. <br />
        <span className='font-bold text-blue-700'>Store client side:</span> <br />
        Client-side storage works on similar principles, but has different uses. It consists of JavaScript APIs that allow you to store data on the client (i.e. on the user's machine) and then retrieve it when needed.
        </span></h5>
        <p className=' text-xl mb-0'>2. What are the properties of props in React?</p>
        <h5>Answer: <span className='text-success'>SQL databases define and manipulate data-based structured query language (SQL). Seeing from a side this language is extremely powerful. SQL is one of the most versatile and widely-used options available which makes it a safe choice, especially for great complex queries. But from another side, it can be restrictive. SQL requires you to use predefined schemas to determine the structure of your data before you work with it. Also, all of your data must follow the same structure. This can require significant up-front preparation which means that a change in the structure would be both difficult and disruptive to your whole system. </span> <br />
        <span className='font-bold text-blue-700'>NonSQL:</span> A NoSQL database has a dynamic schema for unstructured data. Data is stored in many ways which means it can be document-oriented, column-oriented, graph-based, or organized as a key-value store. This flexibility means that documents can be created without having a defined structure first. Also, each document can have its own unique structure. The syntax varies from database to database, and you can add fields as you go. 
        </h5>
        <p className=' text-xl mb-0'>3. What is the difference between node.js and express.js</p>
        <h5>Answer: <span className='text-success'>When we want to build a large-scale application with a framework, Express.js is usually the first thing that comes to mind. Express has gained popularity in the last few years among developers. NestJS is another popular framework that can do the job pretty well, too.</span> <br />
        <span className='font-bold text-blue-700'>Express.js:</span> Express.js is the most popular web framework for Node.js. It is designed for building web applications and APIs and has been called the de facto standard server framework for Node.js.
        </h5>
        <p className=' text-xl mb-0'>4. What is MongoDB aggregate and how does it work?</p>
        <h5>Answer: <span className='text-success'>Aggregations operations process data records and return computed results. Aggregation operations group values from multiple documents together, and can perform a variety of operations on the grouped data to return a single result. In SQL count(*) and with group by is an equivalent of MongoDB aggregation.</span></h5>
      
    </div>
    );
};

export default Blog;