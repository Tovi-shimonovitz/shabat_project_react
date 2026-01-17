import { useEffect, useState } from "react";
import { ShowList } from "./ShowList";
import * as taskList from '../data/Task';



export const TaskReadyList = () => {
       const [lists, setLists] = useState({
        base: [],
        hosting:[],
        traveling:[]

    });

    useEffect(() => {

        const fetchLists = async () => {
            const baseList = await taskList.getBasisTask();
            const hostingsTask = await taskList.getHostingsTask();
            const travelingTask = await taskList.getTravelingTask();
         
            setLists({
                base: baseList,
                hosting:hostingsTask,
                traveling:travelingTask
              });
        };

        fetchLists();
    }, []);

   
    const showTask = (task) => `${task.theTask} time: ${task.time}`;
    // const showShopping = () => "my shopping";



    return (
        <>

            <ul style={{
                listStyleType: 'none',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
                gap: '1%',
            }}>
                {Object.values(lists).map((list) => (
                    <ShowList
                        listToShow={list}
                        funcToSpesific={showTask}
                    />
                ))}

            </ul>
        </>
    );
};











