import { useEffect, useState } from "react";
import { ShowList } from "./ShowList.jsx";
import * as shoppingList from '../data/Shoping.js';



export const ShoppingReadyList = () => {
    const [lists, setLists] = useState({
        base: [],
        shabbatNight: [],
        hosting: [],
        shabbatMorning: [],
        thirdMeal: [],
        visiting: [],

    });

    useEffect(() => {

        const fetchLists = async () => {
            const baseList = await shoppingList.getBaseList();
            const fridayNightList = await shoppingList.getFridayNightList();
            const hostingList = await shoppingList.getHostingList();
            const shabbatMorningList = await shoppingList.getShabbatMorningList();
            const thirdMealList = await shoppingList.getThirdMealList();
            const visitingList = await shoppingList.getVisitingList();
            setLists({
                base: baseList,
                shabbatNight: fridayNightList,
                hosting: hostingList,
                shabbatMorning: shabbatMorningList,
                thirdMeal: thirdMealList,
                visiting: visitingList

            });
        };

        fetchLists();
    }, []);

  
   const showShopping = (shopping) => `${shopping.item} quantity: ${shopping.qty}`;



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
                        funcToSpesific={showShopping}
                    />
                ))}

            </ul>
        </>
    );
};











