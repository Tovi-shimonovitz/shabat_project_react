import { useEffect, useState } from "react";
import { ShowList } from "./ShowList";
import * as cookingList from '../data/cooking.js';



export const ReadyList = () => {

    console.log('cookingList:', cookingList);


    const [lists, setLists] = useState({
        base: [],
        firstSeuda: [],
        secondSeuda: [],
        thirdSeuda: [],

    });

    useEffect(() => {

        const fetchLists = async () => {
            const baseList = await cookingList.getBasicCookingArray();
            const firstList = await cookingList.getFirstSeudaArray();
            const secondList = await cookingList.getSecondSeudaArray();
            const thirdList = await cookingList.getThirdSeudaArray();
            setLists({
                base: baseList,
                firstSeuda: firstList,
                secondSeuda: secondList,
                thirdSeuda: thirdList,

            });
        };

        fetchLists();
    }, []);

    const showFood = (food) => `${food.name} making time: ${food.prepTime}`;
    // const showTask = (task) => `${task.theTask} time: ${task.time}`;
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
                        funcToSpesific={showFood}
                    />
                ))}

            </ul>
        </>
    );
};











