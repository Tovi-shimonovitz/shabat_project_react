import React, { useState } from 'react';
import './BasisTask.css'


function BasisTask()
{

    let keyOfMap=1;
    
    const [tasks, setTasks] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);


         const [inputValue, setInputValue] = useState('');

        const addTask = (event) => {
            event.preventDefault();        
            if (inputValue) {
                setTasks([...tasks, inputValue]);
                setInputValue(''); 
            }
       
        }
        const deleteTask = (item) =>
        {
            setTasks(tasks.filter(task => task !== item));
        }

    return <>
        <ul>
            {tasks.map((item, index) => (
                <li key={keyOfMap++}>{item}
                <button onClick={() => deleteTask(item)}>delete</button> 
                </li>
            ))}
        </ul>
    <form action="" onSubmit={addTask}>
        <input type="text" id="newTask" placeholder="משימה חדשה" value={inputValue}
           onChange={(e) => setInputValue(e.target.value)} />
        <button type='submit'>add</button>

    </form>
    
    </>
}

export default BasisTask