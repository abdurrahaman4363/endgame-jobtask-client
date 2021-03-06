import React from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ToDo = () => {

    const handleAddItem = event => {
        event.preventDefault();

        const addItem = {

            description: event.target.description.value,
            name: event.target.name.value,
            type: event.target.type.value,
            Email: event.target.email.value,
            date: event.target.date.value,

        }


        axios.post('https://nameless-forest-47175.herokuapp.com/task', addItem)

            .then(Response => {
                const { data } = Response;
                if (data.insertedId) {
                    console.log(data)

                    toast('Product is added!!!')
                    // alert('Product is added!!')
                    event.target.reset();
                }
            })

    }
    
    return (
        <div>
            <div class="hero bg-base-200">

                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h2 className='text-xl text-primary font-bold'>Put Task INFO</h2>
                        <form onSubmit={handleAddItem} className='register'>
                            <input type="text" name="name" placeholder="Task Name" class="input input-bordered w-full max-w-xs my-3" />
                            <input type="text" name="email" placeholder="Email" class="input input-bordered w-full max-w-xs my-3" />
                            <input type="text" name="type" placeholder="Type" class="input input-bordered w-full max-w-xs my-3" />
                            <textarea class="textarea textarea-bordered w-full max-w-xs my-2" name="description" placeholder="Write Description"></textarea>
                            <input className='input input-bordered w-full max-w-xs mb-3' type="text" name="date" placeholder='Date' id="" /><br />


                            <input className='w-full max-w-xs text-primary uppercase font-bold' type="submit" value="Add Task" />

                        </form>
                        <ToastContainer />
                    </div>
                </div>

            </div>

        </div>
    );
};

export default ToDo;