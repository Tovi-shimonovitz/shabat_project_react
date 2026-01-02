import React, { useState } from 'react';
import './styleTask.css';


function DisplayTask({initTask})
{

    let keyOfMap=1;
    
    const [tasks, setTasks] = useState(initTask);


         const [inputValue, setInputValue] = useState('');
        const[timeValue,setTimeValue]=useState()
        const addTask = (event) => {
            event.preventDefault();   
            if (inputValue&&timeValue) {
             setTasks([...tasks, { theTask: inputValue, time: timeValue }]);              
                setInputValue(''); 
                setTimeValue()
            }
       
        }
        const deleteTask = (item) =>
        {
            setTasks(tasks.filter(task => task !== item));
        }
    return <>
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
    
    </>
}

export default DisplayTask