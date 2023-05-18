import React from 'react';

const Home = () => {
    return (
        <div>
            <h2 className='text-center'>This is Home</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl">
  <figure><img src="/images/stock/photo-1494232410401-ad00d5433cfa.jpg" alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
            {/* <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div> */}
        </div>
    );
};

export default Home;