import { Button, Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';
import React, { useEffect } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData } from 'react-router-dom';

const SingleData = () => {
    const categorys = useLoaderData();
    const { _id, details,sellerName, toyName, category, sellerEmail, toyPrice, detailDescription, rating, availableQuantity, pictureURL } = categorys;
    console.log(categorys);


    useEffect(() => {
        fetch("https://toy-market-server-sigma.vercel.app/alltoy")
            .then(res => res.json())
            .then(result => {
                console.log(result)
            });
    }, [])

    return (
        // <Card className="w-full mx-auto my-5 max-w-[48rem] flex-row ">
        //     <CardHeader
        //         shadow={false}
        //         floated={false}
        //         className="m-0 w-2/5 shrink-0 rounded-r-none"
        //     >
        //         <img
        //             src={pictureURL}
        //             alt="card-image"
        //             className="h-full w-full object-cover"
        //         />
        //     </CardHeader>
        //     <CardBody>
        //         <Typography variant="h5" color="blue" className="mb-4 uppercase">
        //             {toyName}
        //         </Typography>
        //         <Typography variant="h4" color="blue-gray" className="mb-2">
        //             Saller name: {sellerName}
        //         </Typography>
        //         <Typography color="gray" className="mb-8 font-normal">
        //             {detailDescription}
        //         </Typography>
        //         <Typography color="gray" className="mb-8 font-normal">
        //             Saller email: {sellerEmail}
        //         </Typography>
        //         <Typography color="gray" className="mb-8 font-normal">
        //             Toy Price: {toyPrice}
        //         </Typography>
        //         <Typography color="gray" className="mb-8 font-normal">
        //             Availble Quantity: {availableQuantity}
        //         </Typography>

        //     </CardBody>
        // </Card>
        <div className="card bg-base-100 shadow-xl m-10">
    <figure><img src={pictureURL} alt="Album" /></figure>
    <div className="card-body text-center">
        <h2 className="text-center font-extrabold text-2xl underline mb-2">{toyName}</h2>
        <p><span className='font-bold'>Description: </span>{detailDescription}</p>
        <p><span className='font-bold'>Seller name: </span>{sellerName}</p>
        <p><span className='font-bold'>Seller email: </span>{sellerEmail}</p>
        <p><span className='font-bold'>Toy Price: </span>{toyPrice}</p>
        <p><span className='font-bold'>Category: </span>{category}</p>
        <p><span className='font-bold'>Available Quantity: </span>{availableQuantity}</p>
        <div className='flex justify-center items-center align-middle gap-2'>
            <Rating
                placeholderRating={Math.round(rating || 0)}
                readonly
                emptySymbol={<FaRegStar />}
                placeholderSymbol={<FaStar className='text-warning'></FaStar>}
                fullSymbol={<FaStar />}
            ></Rating>
            <span className='text-yellow-500 '>{rating}</span>
        </div>
    </div>
</div>

    );
}

export default SingleData;