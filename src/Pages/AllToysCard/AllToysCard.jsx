import React from 'react';

const AllToysCard = ({ toy }) => {
    const { toyPrice, toyName, availableQuantity, category } = toy
    return (
        <tr>

            <td> {toyName}</td>
            <td>{category}</td>
            <td>$ {toyPrice}</td>
            <td>{availableQuantity}</td>
            <td>
                <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">View Details</button></td>

        </tr>
    );
};

export default AllToysCard;