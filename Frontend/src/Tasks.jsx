import React from 'react';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';

const Tasks = ({text, updateTask, deleteTask}) => {
    return(
        <div className='task'>
            <div className='text'>{text}</div>
            <div className='icons'>
                <EditNoteIcon className='icon' onClick={updateTask} />
                <DeleteIcon className='icon' onClick={deleteTask} />
            </div>
        </div>
    )
}

export default Tasks;