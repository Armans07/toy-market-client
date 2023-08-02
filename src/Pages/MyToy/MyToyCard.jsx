import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const MyToyCard = ({ myToy, handleDelete, handleUpdateConfirm }) => {
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { _id, toyPrice, toyName, availableQuantity, detailDescription, category, rating, carType, pictureURL } = myToy

    return (
        <tr>
            <td>{toyName}</td>
            <td>{category}</td>
            <td>$ {toyPrice}</td>
            <td>{availableQuantity}</td>
            <td className=''>

                <button><label htmlFor={_id} className="btn btn-ghost bg-blue-950 text-white font-semibold btn-xs me-2">Update</label></button>


                <input type="checkbox" id={_id} className="modal-toggle" />
                <div className="modal p-10">
                    <label
                        htmlFor={_id}
                        className="btn btn-sm btn-circle absolute right-2 top-2"
                    >
                        ✕
                    </label>
                    <form onSubmit={handleSubmit(handleUpdateConfirm)}>
                        <div className='bg-opacity-10 font-bold hover:bg-gray-200 p-10'>
                            <div className='md:flex gap-1 mb-4'>
                                <div className="form-control hidden md:w-1/2">
                                    <label className="label">
                                        <span className="label-text">Toy Name</span>
                                    </label>
                                    <label className="input-group">
                                        <span>Toy Name</span>
                                        <input type="text" placeholder="Toy Name" className="input input-bordered w-full" {...register("_id")} defaultValue={_id}
                                        />
                                    </label>

                                </div>
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
                                        <input type="text" placeholder="Details" className="input input-bordered w-full" {...register("detailDescription")} defaultValue={detailDescription} />
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
                                        <input type="number" placeholder="Ratting" className="input input-bordered w-full" {...register("rating")} defaultValue={rating} />
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
                                        <input type="text" placeholder="Car Type" className="input input-bordered w-full" {...register("carType")} defaultValue={carType} />
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
                                        <input type="text" placeholder="Photo URL" className="input input-bordered w-full" {...register("pictureURL")} defaultValue={pictureURL} />
                                    </label>
                                </div>
                                <div className="form-control w-1/2">
                                    <label className="label">
                                        <span className="label-text">Sub Category</span>
                                    </label>
                                    <label className="input-group">
                                        <span>Category</span>
                                        <select className="input input-bordered w-full" {...register("category")} >
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