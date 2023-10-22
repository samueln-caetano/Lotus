import axios from 'axios';

const baseUrl = "http://localhost:3001";

const getAllTask = (setTask) => {
    return axios.get(baseUrl)
        .then(({ data }) => {
            console.log('data: ', data);
            setTask(data);
        })
        .catch((err) => console.log(err))
};

const addAllTask = (text, setText, setTask) => {
    
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data) =>{
        console.log(data);
        setText('')
        getAllTask(setTask)
    })
    .catch((err) => console.log(err))
};

const updateTask = (taskId, text, setText, setTask, setIsUpdating) => {
    
    axios
    .post(`${baseUrl}/update`, { _id: taskId, text })
    .then(() =>{
        setText('');              
        setIsUpdating(false);      
        getAllTask(setTask);       
    })
    .catch((err) => console.log(err))  
};


export { getAllTask, addAllTask, updateTask };
