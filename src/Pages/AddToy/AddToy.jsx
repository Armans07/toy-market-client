import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddToy = () => {
    const { user } = useContext(AuthContext)

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    
    const onSubmit = (data) => {
        fetch("https://toy-market-server-sigma.vercel.app/addtoy", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                if (result?.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Toy added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
        console.log(data);
    }

    return (
        <div className='p-24'>
            <h2 className='font-extrabold text-3xl text-center mb-5'>Add Toy</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='md:flex gap-1 mb-4'>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <label className="input-group">
                            <span>Toy Name</span>
                            <input type="text" placeholder="Toy Name" className="input input-bordered w-full" {...register("toyName")}
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
                            <input type="text" placeholder="price" className="input input-bordered w-full" {...register("toyPrice")} />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <span>Quantity</span>
                            <input type="text" placeholder="Quantity" className="input input-bordered w-full" {...register("availableQuantity")} />
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
                            <select className="input input-bordered w-full" {...register("category")}>
                                <option></option>
                                <option value="science kits">science kits</option>
                                <option value="math learning toys">math learning toys</option>
                                <option value="engineering kits">engineering kits</option>

                            </select>
                        </label>
                    </div>
                </div>

                <input type="submit" value="Add Toy" className='btn btn-block' />
            </form>
        </div>
    );
};

export default AddToy;