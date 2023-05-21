import React from 'react';

const MyToyCard = ({ myToy, handleDelete }) => {

    const { _id, toyPrice, toyName, availableQuantity, category } = myToy
    return (
        <tr>

            <td> {toyName}</td>
            <td>{category}</td>
            <td>$ {toyPrice}</td>
            <td>{availableQuantity}</td>
            <td>
                <button  className="btn btn-ghost btn-xs">Update</button>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </td>

        </tr>
    );
};

export default MyToyCard;