import React, { useEffect, useState } from 'react';
import './styleTask.css';


function DisplayTask({initTask, addNewTask, deleteTask2})
{
    let keyOfMap=1;
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const[timeValue,setTimeValue]=useState('')

    useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await initTask(); 
        setTasks(data); 
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
    }, [initTask]); 

    const addTask = async (event) => {
            event.preventDefault();   
            if (inputValue&&timeValue) {
              const  newTask = { theTask: inputValue, time: timeValue}
            try{      
              const   data = await  addNewTask(newTask);
              setTasks(data)}
             catch(error){console.error("Error fetching tasks:", error);}
                setInputValue(''); 
                setTimeValue('')
            }
        }

    const deleteTask = async (item) =>{
           try{
           const data =   await deleteTask2(item);
           setTasks(data)
           }
           catch(error)
           {
          console.error("Error fetching tasks:", error);
           }
        }
        
    return <>
        <h1>_________________________________________________________________________________</h1>

        <ul>
            {tasks.map((item, index) => (
                <li key={keyOfMap++}><h1>task:</h1>{item.theTask}<h1>time:</h1>{+item.time+" hour"}
                <button onClick={() => deleteTask(item)}>delete</button> 
                </li>
            ))}
        </ul>
    <form action="" onSubmit={addTask}>
        <input type="text" id="newTask" placeholder="new task" value={inputValue}
           onChange={(e) => setInputValue(e.target.value)} />
           <input type="number" id="newTask" placeholder="time" value={timeValue}
           onChange={(e) => setTimeValue(e.target.value)} />
        <button type='submit'>add</button>

    </form>
        <h1>_________________________________________________________________________________</h1>
    <br /><br /><br /> 
    </>
}

export default DisplayTask