    import React from 'react';
    import { Link } from 'react-router-dom';

    const ErrorPage = () => {
        return (
            <div>
                <style>@import url https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css;</style>
                <div class="min-w-screen min-h-screen bg-blue-100 flex items-center p-5 lg:p-20 overflow-hidden relative">
                    <div class="flex-1 min-h-full min-w-full rounded-3xl bg-white shadow-xl p-10 lg:p-20 text-gray-800 relative md:flex items-center text-center md:text-left">
                        <div class="w-full md:w-1/2">
                            <div class="mb-10 md:mb-20 text-gray-600 font-light">
                                <h1 class="font-black uppercase text-3xl lg:text-5xl text-yellow-500 mb-10">You seem to be lost!</h1>
                                <p>The page you're looking for isn't available.</p>
                                <p>Try searching again or use the Go Back button below.</p>
                            </div>
                            <div class="mb-20 md:mb-0">
                                <Link to='/'><button class="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-yellow-500 hover:text-yellow-600"><i class="mdi mdi-arrow-left mr-2"></i> Go Back</button></Link>
                            </div>
                        </div>
                        <div>
                            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=740&t=st=1684470943~exp=1684471543~hmac=24351dcc48d2323a29ec104c6388146039ca94a4834c290bc6d8a1787ad90303" alt="" />
                        </div>
                    </div>
                    <div class="w-64 md:w-96 h-96 md:h-full bg-blue-200 bg-opacity-30 absolute -top-64 md:-top-96 right-20 md:right-32 rounded-full pointer-events-none -rotate-45 transform"></div>
                    <div class="w-96 h-full bg-yellow-200 bg-opacity-20 absolute -bottom-96 right-64 rounded-full pointer-events-none -rotate-45 transform"></div>
                </div>
            </div>
        );
    };

    export default ErrorPage;