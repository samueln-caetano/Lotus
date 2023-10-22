import React, { useEffect, useState } from 'react';
import Tasks from './Tasks';
import {getAllTask, addAllTask, updateTask} from './utils/HandleApi';

function Home() {
    const [tasks, setTasks] = useState([]);
    const [text, setText] = useState("");
    const [isUpdating, setIsUpdating] = useState(false);
    const [tasksId, setTasksId] = useState("");

    useEffect(() => {
        getAllTask(setTasks); 
    }, []);

    const handleUpdateTask = (_id, text) => {
        setIsUpdating(true)
        setText(text)
        setTasksId(_id)
    }

    return (
        <div>
            <div className='container'>
                <h1>Todo App</h1>

                <div className='top'>
                    <input 
                    type="text" 
                    placeholder='Add task' 
                    value={text} 
                    onChange={(e) => setText(e.target.value)}/>

                    <div className="add" 
                    onClick={ isUpdating ? 
                    () => updateTask(tasksId, text, setTasks, setText, setIsUpdating) : 
                    () => addAllTask(text, setText, setTasks)}> 
                    {isUpdating ? "Update" : "Add"} 
                    </div>

                </div>
                <div className="list">

                {tasks.map((item) => (<Tasks key={item._id} text={item.text} 
                
                updateTask = {() => handleUpdateTask(item._id, item.text)} />))}

                </div>
            </div>
        </div>
    );
}

export default Home;
