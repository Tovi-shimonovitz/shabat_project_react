import { useEffect, useState } from "react";
import { ShowList } from "./ShowList.jsx";
import * as cookingList from '../data/cooking.js';



export const CookingReadyList = () => {
    const spesificShabbat = JSON.parse(localStorage.getItem('shabbatDetailes'));
    const [lists, setLists] = useState({
        base: [],
        firstSeuda: [],
        secondSeuda: [],
        thirdSeuda: [],

    });

    useEffect(() => {

        let firstList = [];
        let secondList = [];
        let thirdList = [];
        const fetchLists = async () => {
         
            if (spesificShabbat.Location == 'at home') {
                if (spesificShabbat.num_meal_at_home >= 1) {
                    firstList = await cookingList.getFirstSeudaArray();
                }
                if (spesificShabbat.num_meal_at_home >= 2) {
                    secondList = await cookingList.getSecondSeudaArray();
                }
                if (spesificShabbat.num_meal_at_home == 3) {
                    thirdList = await cookingList.getThirdSeudaArray();
                }
            }
            const baseList = await cookingList.getBasicCookingArray();

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
                    list.length > 0 && (<ShowList
                        listToShow={list}
                        funcToSpesific={showFood}
                    />)

                ))}

            </ul>
        </>
    );
};











