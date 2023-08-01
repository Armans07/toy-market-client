import { Button, Card, CardBody, CardFooter, CardHeader, Typography } from '@material-tailwind/react';
import React from 'react';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SubCategoryCard = ({ item }) => {
    const { _id, toyName, pictureURL, toyPrice, rating } = item;
    return (
        // <div className="card w-96 bg-base-100 shadow-xl">
        //     <figure className="px-10 pt-10">
        //         <img src={pictureURL} alt="Shoes" className="rounded-xl" />
        //     </figure>
        //     <div className="card-body items-center text-center">
        //         <h2 className="card-title">{toyName}</h2>
        //         <p>Price: {toyPrice}</p>
        //         <p>Ratings: {rating}</p>
        //         <div className="card-actions">
        //             <Link to={`/singleData/${_id}`}>
        //                 <button className="btn btn-accent font-semisemibold">View Details</button>
        //             </Link>
        //         </div>
        //     </div>
        // </div>



        <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
                <img
                    src={pictureURL}
                    alt="card-image"
                />
            </CardHeader>
            <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2 text-2xl">
                   {toyName}
                </Typography>
                <Typography>
                   <p className='font-semibold'>Price: {toyPrice}</p>
                   <p className='font-semibold'>Ratting: {rating}</p>
                </Typography>
            </CardBody>
            <div className='flex pb-2 justify-end hover:scale-110'>
             <Link to={`/singleData/${_id}`}>  <Button variant="text" className="flex items-center gap-2 text-blue-950">
                        <span className='text-sm font-extrabold'>show More</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                            className="h-4 w-4 text-blue-950"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                            />
                        </svg>
                    </Button></Link>
             </div>
        </Card>

    );
}


export default SubCategoryCard;