import React, { useEffect, useState } from 'react';
import AllToysCard from '../AllToysCard/AllToysCard';

const AllToys = () => {
    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch("https://toy-market-server-sigma.vercel.app/alltoy")
            .then(res => res.json())
            .then(result => {
                setToys(result)
            });
    }, [])

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
                            toys?.map(toy => <AllToysCard
                                key={toy._id}
                                toy={toy}>

                            </AllToysCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;