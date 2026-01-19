import { useEffect, useState } from "react";
import { ShowList } from "./ShowList";
import * as taskList from '../data/Task';



export const TaskReadyList = () => {
    const spesificShabbat = JSON.parse(localStorage.getItem('shabbatDetailes'));
    const [lists, setLists] = useState({
        base: [],
        hosting: [],
        traveling: []

    });

    useEffect(() => {

        const fetchLists = async () => {
            let hostingsTask = [];
            let travelingTask = [];
            const baseList = await taskList.getBasisTask();
            if (spesificShabbat.Location == 'at home' && spesificShabbat.hosting) {
                hostingsTask = await taskList.getHostingsTask();
            }
            else {
                travelingTask = await taskList.getTravelingTask();
            }


            setLists({
                base: baseList,
                hosting: hostingsTask,
                traveling: travelingTask
            });
        };

        fetchLists();
    }, []);


    const showTask = (task) => `${task.theTask} time: ${task.time}`;
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
                    list.length>0&&( <ShowList
                        listToShow={list}
                        funcToSpesific={showTask}
                    />)
                   
                ))}

            </ul>
        </>
    );
};











