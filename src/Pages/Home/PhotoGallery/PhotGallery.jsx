import React from 'react';

const PhotGallery = () => {
    return (
        <div>
            <div className='m-10'>
                <h2 className='text-center text-3xl text-blue-900 under font-extrabold'>Photo Gallery</h2>
            </div>
            <div class=" mx-auto px-5 py-2 lg:px-32 ">
                <div class="-m-1 flex flex-wrap md:-m-2">
                    <div class="flex w-1/2 flex-wrap">
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src="https://img.freepik.com/free-psd/3d-rendering-car-travel-icon_23-2149389101.jpg?size=626&ext=jpg&uid=R26452579&ga=GA1.2.1311615040.1680220332&semt=ais" />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src="https://img.freepik.com/free-photo/still-life-colorful-gummy-bears_23-2149870780.jpg?size=626&ext=jpg&uid=R26452579&ga=GA1.2.1311615040.1680220332&semt=ais" />
                        </div>
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src="https://img.freepik.com/free-photo/supply-chain-representation-with-yellow-truck_23-2149853111.jpg?size=626&ext=jpg&uid=R26452579&ga=GA1.1.1311615040.1680220332&semt=ais" />
                        </div>
                    </div>
                    <div class="flex w-1/2 flex-wrap">
                        <div class="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src="https://img.freepik.com/free-photo/still-life-colorful-gummy-bears_23-2149870791.jpg?w=740&t=st=1684473147~exp=1684473747~hmac=56b0c695d0a31f8e34939901f4b8059910231d2f866d0486d410ecb8080be72d" />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src="https://img.freepik.com/free-photo/toy-car-with-gift-box_23-2147959328.jpg?size=626&ext=jpg&uid=R26452579&ga=GA1.2.1311615040.1680220332&semt=ais" />
                        </div>
                        <div class="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                class="block h-full w-full rounded-lg object-cover object-center"
                                src="https://img.freepik.com/free-photo/toy-car-with-gift-roof_23-2147931147.jpg?size=626&ext=jpg&uid=R26452579&ga=GA1.2.1311615040.1680220332&semt=ais" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhotGallery;