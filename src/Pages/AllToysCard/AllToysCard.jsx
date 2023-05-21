import React from 'react';
import { Link } from 'react-router-dom';

const AllToysCard = ({ toy }) => {
    const { toyPrice, toyName, availableQuantity, category } = toy
    return (
        <tr>

            <td> {toyName}</td>
            <td>{category}</td>
            <td>$ {toyPrice}</td>
            <td>{availableQuantity}</td>
            <td>
                <Link to="/viewDetails"><button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">View Details</button></Link>
                </td>

        </tr>
    );
};

export default AllToysCard;