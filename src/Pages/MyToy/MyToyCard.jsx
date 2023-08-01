import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyToyCard = ({ myToy, handleDelete, handleUpdateConfirm }) => {
    const {user}=useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { _id, toyPrice, toyName, availableQuantity, category } = myToy
    return (
  
        <tr>
        <td>{toyName}</td>
        <td>{category}</td>
        <td>$ {toyPrice}</td>
        <td>{availableQuantity}</td>
        <td>
                
                <button onClick={() => handleUpdateConfirm(_id)} ><label htmlFor="my-modal-5" className="btn btn-ghost bg-blue-950 text-white font-semibold btn-xs me-2">Update</label></button>

                
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                    <form  onSubmit={handleSubmit(handleUpdateConfirm)}>
                       <div className='bg-gray-300 p-5'>
                       <div className='md:flex gap-1 mb-4'>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Toy Name</span>
                                </label>
                                <label className="input-group">
                                    <span>Toy Name</span>
                                    <input type="text" placeholder="Toy Name" className="input input-bordered w-full" {...register("toyName")} defaultValue={toyName}
                                    />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Seller Name</span>
                                </label>
                                <label className="input-group">
                                    <span>Seller name</span>
                                    <input value={user?.displayName} type="text" placeholder="Seller name" className="input input-bordered w-full" {...register("sellerName")} />
                                </label>
                            </div>
                        </div>
                        <div className='md:flex gap-1 mb-4'>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Seller Email</span>
                                </label>
                                <label className="input-group">
                                    <span>Email</span>
                                    <input value={user?.email} type="text" placeholder="Seller Email" className="input input-bordered w-full" {...register("sellerEmail")} />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Details</span>
                                </label>
                                <label className="input-group">
                                    <span>Details</span>
                                    <input type="text" placeholder="Details" className="input input-bordered w-full" {...register("details")} />
                                </label>
                            </div>
                        </div>
                        <div className='md:flex gap-1 mb-4'>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Ratting</span>
                                </label>
                                <label className="input-group">
                                    <span>Ratting</span>
                                    <input type="number" placeholder="Ratting" className="input input-bordered w-full" {...register("ratting")} />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Toy Price</span>
                                </label>
                                <label className="input-group">
                                    <span>Price</span>
                                    <input type="text" placeholder="price" className="input input-bordered w-full" {...register("toyPrice")} defaultValue={toyPrice} />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Available Quantity</span>
                                </label>
                                <label className="input-group">
                                    <span>Quantity</span>
                                    <input type="text" placeholder="Quantity" className="input input-bordered w-full" {...register("availableQuantity")} defaultValue={availableQuantity} />
                                </label>
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Car type</span>
                                </label>
                                <label className="input-group">
                                    <span>Type</span>
                                    <input type="text" placeholder="Car Type" className="input input-bordered w-full" {...register("carType")} />
                                </label>
                            </div>
                        </div>
                        <div className='flex gap-2 mb-8'>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Toy Picture</span>
                                </label>
                                <label className="input-group">
                                    <span>PhotoURL</span>
                                    <input type="text" placeholder="Photo URL" className="input input-bordered w-full" {...register("photoURL")} />
                                </label>
                            </div>
                            <div className="form-control w-1/2">
                                <label className="label">
                                    <span className="label-text">Sub Category</span>
                                </label>
                                <label className="input-group">
                                    <span>Category</span>
                                    <select className="input input-bordered w-full" {...register("category")} defaultValue={category}>
                                        <option></option>
                                        <option value="science kits">science kits</option>
                                        <option value="math learning toys">math learning toys</option>
                                        <option value="engineering kits">engineering kits</option>

                                    </select>
                                </label>
                            </div>
                        </div>

                        <input type="submit" value="Update Toy" className='btn btn-block' />
                       </div>
                    </form>
                </div>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs bg-blue-950 text-white font-semibold">Delete</button>
            </td>
      </tr>
    );
};

export default MyToyCard;