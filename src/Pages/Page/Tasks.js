import React, { useEffect, useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';

const Tasks = () => {
    const [tasks, setTasks]=useState([]);
    const navigate = useNavigate();

    const navigateToToDo= id =>{
        navigate(`/update/${id}`);
    }

    useEffect(()=>{
        fetch('https://nameless-forest-47175.herokuapp.com/task')
        .then(res => res.json())
        .then(data => setTasks(data));
    },[])
    return (
        <div>
            <h1 className='text-center font-bold text-xl text-primary'>Task Details : {tasks.length}</h1>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Task Name</th>
                            <th>Email</th>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Description</th>
                            <th>Edit</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{task.name}</td>
                                <td>{task.Email}</td>
                                <td>{task.date}</td>
                                <td>{task.type}</td>
                                <td>{task.description}</td>
                                <td><button onClick={() => navigateToToDo (task._id)} className='btn btn-primary'>edit</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Tasks;