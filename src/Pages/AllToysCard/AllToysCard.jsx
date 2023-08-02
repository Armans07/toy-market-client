import { Button, CardFooter } from '@material-tailwind/react';
import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllToysCard = ({ toy }) => {
    const { _id, toyPrice, toyName, availableQuantity, category,detailDescription } = toy
    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semisemibold mb-2">{toyName}</h2>
            <p className="text-gray-600 mb-2">Category: {category}</p>
            <p className="text-gray-600 mb-2">Price: ${toyPrice}</p>
            <p className="text-gray-600 mb-2">Available Quantity: {availableQuantity}</p>


            
                <div className='flex justify-end'>
                <Link className='flex gap-1 items-center' to={`/singleData/${_id}`}><p className='text-sm font-extra5bold text-blue-950'>View Details</p><span ><FaArrowAltCircleRight className='h-8 w-6'></FaArrowAltCircleRight></span></Link>
                </div>
            

        </div>
    );
};

export default AllToysCard;