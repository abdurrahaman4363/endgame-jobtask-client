import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';


const ToDo = () => {

    const handleAddItem = event => {
        event.preventDefault();

        const addItem = {

            description: event.target.description.value,
            minimumQuantity: event.target.minimumQuantity.value,
            availableQuantity: event.target.availableQuantity.value,
            name: event.target.name.value,
            price: event.target.price.value,
            img: event.target.img.value,
        }


        axios.post('http://localhost:3000/todo', addItem)

            .then(Response => {
                const { data } = Response;
                if (data.insertedId) {
                    console.log(data)

                    toast('Product is added!!!')
                    event.target.reset();
                }
            })

    }
    return (
        <div>
            <h1>Admin Add A Product</h1>
            <div class="hero bg-base-200">

                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h2 className='text-xl text-primary font-bold'>Add A Product</h2>
                        <form onSubmit={handleAddItem} className='register'>
                            <input type="text" name="name" placeholder="Name" class="input input-bordered w-full max-w-xs my-3" />
                            <input type="text" name="minimumQuantity" placeholder="Minimum Order" class="input input-bordered w-full max-w-xs mb-3" />
                            <input type="text" name="availableQuantity" placeholder="Available Order" class="input input-bordered w-full max-w-xs" />
                            <textarea class="textarea textarea-bordered w-full max-w-xs my-2" name="description" placeholder="Write Description"></textarea>
                            <input className='input input-bordered w-full max-w-xs mb-3' type="number" name="price" placeholder='price' id="" /><br />
                            <input name="img" placeholder="Photo URL" class="input input-bordered w-full max-w-xs" />

                            <input className='w-full max-w-xs text-primary uppercase font-bold' type="submit" value="Add item" />

                        </form>
                        <ToastContainer />
                    </div>
                </div>

            </div>
           
        </div>
    );
};

export default ToDo;