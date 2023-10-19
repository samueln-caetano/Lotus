import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

function Home() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/get-todo")
            .then(result => setTodos(result.data))
            .catch(err => console.error(err));
    }, []);

    const handleUpdate = (id) => {
        axios.put(`http://localhost:3001/update/${id}`)
            .then(result => {console.log(result)})
            .catch(err => console.error(err))
        }

    const handleDelete = (id) => {
        axios.put(`http://localhost:3001/delete/${id}`)
            .then(result => {console.log(result)})
            .catch(err => console.error(err))
        }
        
    return (
        <div className='home'>
            <h2>Todo List</h2>
            <Create />
            {
                todos.length === 0 ?
                <div>
                    <h2>No Record</h2>
                </div> :
                todos.map(todo => (
                    <div className='task' key={todo._id}>
                        <div className='checkbox' onClick={() => handleUpdate(todo._id)}>
                            {todo.done ? <CheckBoxIcon className='icon'/> : <CheckBoxOutlineBlankIcon className='icon' />}
                            
                            <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                        </div>
                        <div>
                            <span><DeleteIcon className='icon' onClick={() => handleDelete(todo._id)}/></span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Home;
