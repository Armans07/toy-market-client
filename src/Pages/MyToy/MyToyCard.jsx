import React from 'react';

const MyToyCard = ({ myToy }) => {

    const { toyPrice, toyName, availableQuantity, category } = myToy
    return (
        <tr>

            <td> {toyName}</td>
            <td>{category}</td>
            <td>$ {toyPrice}</td>
            <td>{availableQuantity}</td>
            <td>
                <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Update</button>
                <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </td>

        </tr>
    );
};

export default MyToyCard;