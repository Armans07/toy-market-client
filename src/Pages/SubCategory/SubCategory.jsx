import React from 'react';

const SubCategory = () => {
  
    return (
        <div>
            <h2 className='text-center text-4xl font-bold my-5'>Choose Another Category</h2>
            <div className="flex tabs justify-center my-2">
                <button className='tab tab-lifted '>Engineering</button>
                <button className="tab tab-lifted tab-active">Science</button>
                <button className="tab tab-lifted">Math Learning</button>
            </div>
            <hr />
        </div>
    );
};

export default SubCategory;