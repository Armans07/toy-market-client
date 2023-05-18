import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-[600px]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/cute-baby-with-toys_624325-3269.jpg?w=740&t=st=1684444189~exp=1684444789~hmac=5ff7d42a10055c796e84167c2c7a03fcfee43615074b017e4fa59d3d500d2e5c" className="w-full h-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Babys Toy</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">New Toys</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide4" className="btn hover:bg-slate-600  btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn hover:bg-slate-600  btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/full-shot-smiley-baby-floor_23-2149320459.jpg?w=740&t=st=1684444789~exp=1684445389~hmac=1f5020d4af01811d7bed0bb82d2008dbf1b233255d7661f53765743f87f32da0" className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Babys Toy</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="hover:bg-slate-600 btn btn-primary mr-5">Discover More</button>
                                <button className="hover:bg-slate-600 btn btn-outline btn-secondary">New Toys</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/portrait-little-boy-playing-with-toys_23-2148836240.jpg?w=740&t=st=1684445071~exp=1684445671~hmac=f504f4ccbfaa20c1c498dc5b604f4d0ccc9b381cd34e7e1e0f53caa4ee4c6751" className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Babys Toy</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">New Toys</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide2" className=" hover:bg-slate-600 btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="hover:bg-slate-600 btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src="https://img.freepik.com/free-photo/little-girl-playing-with-toys-living-room_329181-9334.jpg?w=740&t=st=1684444992~exp=1684445592~hmac=0ca34060d378d54ac81ff6a79710c2f1eeed4c7356b46f285a83ab648f52a841" className="w-full rounded-xl" />
                    <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                        <div className='text-white space-y-7 pl-12 w-1/2'>
                            <h2 className='text-6xl font-bold'>Affordable Price For Babys Toy</h2>
                            <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                            <div>
                                <button className="btn btn-primary mr-5">Discover More</button>
                                <button className="btn btn-outline btn-secondary">New Toys</button>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                        <a href="#slide3" className="hover:bg-slate-600 btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="hover:bg-slate-600 btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;