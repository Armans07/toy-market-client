import React from 'react';

const AboutUs = () => {
  return (
    <section className="bg-gradient-to-b from-blue-500 to-purple-600 py-16">
      <div className="container mx-auto px-4">
        <div className="md:flex md:flex-row md:justify-center md:items-center">
          <div className="md:w-1/2 md:mr-8">
            <h2 className="text-3xl font-semisemibold text-white mb-4">
            Welcome to our Toy Shop!
            </h2>
            <p className="text-white text-lg mb-6">
              In this platform, we are committed to providing you with the latest information about
              React.js and Tailwind CSS. Our goal is to help developers like you build amazing web
              applications with ease and efficiency.
            </p>
          
            <p className="text-white text-lg mb-6">
            With a wide range of toys from classic favorites to the latest trends, there's something for every child at our store. Whether you're looking for cuddly plush toys, challenging puzzles, engaging board games, or exciting outdoor play equipment, we've got you covered.
            </p>

            <p className="text-white text-lg mb-6">
            We take pride in our commitment to exceptional customer service. Our dedicated team is always ready to assist you in finding the perfect toy for that special occasion or a surprise gift. Your satisfaction is our top priority, and we strive to make every shopping experience with us enjoyable and stress-free.
            </p>
            <p className="text-white text-lg mb-6">
            Thank you for choosing our Online Toy Shop as your go-to destination for all things fun and playful. We look forward to being a part of your child's journey, helping them create precious memories that will last a lifetime.
            </p>
            <p className="text-white text-2xl">
           Happy Shopping !
            </p>

          </div>
          <div className="md:w-1/2 md:ml-8">
            <img
              src="https://i.ibb.co/tJZ2bqF/6170343-3054191.jpg"
              alt="About Us"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;


