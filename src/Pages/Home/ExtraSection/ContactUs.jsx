import React from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bxu18bq', 'template_emp9mt7', e.target, 'vAYtHAxSWXPuXwhw1')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
            }, (error) => {
                console.log('Error sending email:', error.text);
            });

        e.target.reset();
    };

    return (
        <div className="flex flex-col md:flex-row max-w-6xl mx-auto my-8 items-center gap-16">

            <form onSubmit={handleSubmit} className="flex-1 bg-white rounded-lg shadow-md p-6">
                <h2 className="text-2xl text-blue-900 font-semibold text-center mb-4">Contact Us</h2>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name:</label>
                    <input type="text" name="name" id="name" required className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email:</label>
                    <input type="email" name="email" id="email" required className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message:</label>
                    <textarea name="message" id="message" rows="4" required className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"></textarea>
                </div>
                <button type="submit" className="bg-blue-950 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Send Message</button>
            </form>
            <div className="flex-shrink-0 md:mr-4 text-center">
                <h3 className="text-3xl font-semibold text-blue-900 mb-2 ">Contact Information</h3>
                <p className="text-gray-600">
                    Address: 1234 Main St. <br />
                    City, State, Zip Code
                </p>
            </div>
        </div>
    );
};

export default ContactUs;
