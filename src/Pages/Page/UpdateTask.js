import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const UpdateTask = () => {
         
const {id} = useParams();
 

  const [tasks, setTasks]=useState({});

   useEffect(() =>{
    const url = `https://nameless-forest-47175.herokuapp.com/task/${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setTasks(data))
   },[])

   /////////////////////////

    const handleUpdate = event => {

        event.preventDefault();

        const update = {

            description: event.target.description.value,
            name: event.target.name.value,
            type: event.target.type.value,
            Email: event.target.email.value,
            date: event.target.date.value,

        }
        fetch(`https://nameless-forest-47175.herokuapp.com/task/${id}`, {
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(update)
 })
            .then(Response => {
                const { data } = Response;
                if (data.insertedId) {
                    console.log(data)

                    toast('updated info!!!')
                    event.target.reset();
                }
            })
    }
    return (
        <div>
             <div>
            <div class="hero bg-base-200">

                <div class="hero-content text-center">
                    <div class="max-w-md">
                        <h2 className='text-xl text-primary font-bold'>Task Update : {tasks.name}</h2>
                        <form onSubmit={handleUpdate} className='register'>
                            <input type="text" name="name" placeholder="Task Name" class="input input-bordered w-full max-w-xs my-3" />
                            <input type="text" name="email" placeholder="Email" class="input input-bordered w-full max-w-xs my-3" />
                            <input type="text" name="type" placeholder="Type" class="input input-bordered w-full max-w-xs my-3" />
                            <textarea class="textarea textarea-bordered w-full max-w-xs my-2" name="description" placeholder="Write Description"></textarea>
                            <input className='input input-bordered w-full max-w-xs mb-3' type="text" name="date" placeholder='Date' id="" /><br />


                            <input className='w-full max-w-xs text-primary uppercase font-bold' type="submit" value="Update" />

                        </form>
                        <ToastContainer />
                    </div>
                </div>

            </div>

        </div>
        </div>
    );
};

export default UpdateTask;