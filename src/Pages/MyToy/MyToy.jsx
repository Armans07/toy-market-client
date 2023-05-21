import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToyCard from './MyToyCard';
import Swal from 'sweetalert2';

const MyToy = () => {
    const { user } = useContext(AuthContext)
    const [myToys, setMyToys] = useState([]);

    useEffect(() => {
        fetch(`https://toy-market-server-sigma.vercel.app/mytoy/${user?.email}`)
            .then(res => res.json())
            .then(result => {
                setMyToys(result)


            });
    }, [user])

    const handleDelete = id => {
        const proceed = confirm('Are sure want to delete your data')
        if (proceed) {
            fetch(`https://toy-market-server-sigma.vercel.app/remove/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data?.deletedCount) {
                        Swal.fire({
                            title: 'Delete!',
                            text: 'Toy Delete successfully',
                            icon: 'success',
                            confirmButtonText: 'Done'
                            
                        })
                        const remaining = myToys.filter(myToy=>myToy._id != id)
                        setMyToys(remaining)
                    }

                })
        }
    }


    const handleUpdateConfirm = id => {
        fetch(`https://toy-market-server-sigma.vercel.app/updatedToy/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'applications/json'
            },
            body: JSON.stringify({ status: 'Updated' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    const remaining = myToys.filter(myToy => myToy._id !== id);
                    const update = myToys.find(myToy => myToy._id === id);
                    update.status = 'Update'
                    const newBookings = [update, ...remaining];
                    setMyToys(newBookings);
                }
            })
    }

    return (
        <div className='container mx-auto'>
            <h2 className="text-5xl"></h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Toy Name</th>
                            <th>Sub-Category</th>
                            <th>Price</th>
                            <th>Availble Quantity</th>
                            <th>

                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys?.map(myToy => <MyToyCard
                                key={myToy._id}
                                myToy={myToy}
                                handleDelete={handleDelete}
                                handleUpdateConfirm={handleUpdateConfirm}
                            >
                            </MyToyCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToy;