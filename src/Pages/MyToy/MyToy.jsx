import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyToyCard from './MyToyCard';
import Swal from 'sweetalert2';

const MyToy = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [control, setControl] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:5000/mytoy/${user?.email}`)
      .then((res) => res.json())
      .then((result) => {
        setMyToys(result);
      });
  }, [user, control]);

  const handleDelete = (id) => {
    const proceed = confirm('Are sure want to delete your data');
    if (proceed) {
      fetch(`http://localhost:5000/remove/${id}`, {
        method: 'DELETE',
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data?.deletedCount) {
            Swal.fire({
              title: 'Delete!',
              text: 'Toy Delete successfully',
              icon: 'success',
              confirmButtonText: 'Done',
            });
            const remaining = myToys.filter((myToy) => myToy._id !== id);
            setMyToys(remaining);
          }
        });
    }
  };

  const handleUpdateConfirm = (data) => {
    console.log(data);
    fetch(`http://localhost:5000/updatedToy/${data?._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          alert('Its Worked!')
          setControl(!control);
        }
      });
  };

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto w-full">
        <div className="w-full">
          <table className="table w-full border-collapse">
            {/* head */}
            <thead>
              <tr>
                <th className="p-2 sm:p-4">Toy Name</th>
                <th className="p-2 sm:p-4">Sub-Category</th>
                <th className="p-2 sm:p-4">Price</th>
                <th className="p-2 sm:p-4">Available Quantity</th>
                <th className="p-2 sm:p-4"></th>
              </tr>
            </thead>
            <tbody>
              {myToys?.map((myToy) => (
                <MyToyCard
                  key={myToy._id}
                  myToy={myToy}
                  handleDelete={handleDelete}
                  handleUpdateConfirm={handleUpdateConfirm}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyToy;
