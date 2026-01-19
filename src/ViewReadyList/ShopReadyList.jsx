import { useEffect, useState } from "react";
import { ShowList } from "./ShowList.jsx";
import * as shoppingList from '../data/Shoping.js';



export const ShoppingReadyList = () => {
    const spesificShabbat = JSON.parse(localStorage.getItem('shabbatDetailes'));
    const [lists, setLists] = useState({
        base: [],
        shabbatNight: [],
        hosting: [],
        shabbatMorning: [],
        thirdMeal: [],
        visiting: [],

    });

    useEffect(() => {
        let fridayNightList = [];
        let hostingList = [];
        let shabbatMorningList = [];
        let thirdMealList = [];
        let visitingList = [];
        const fetchLists = async () => {
            const baseList = await shoppingList.getBaseList();

            if (spesificShabbat.Location == 'at home') {
                if (spesificShabbat.num_meal_at_home >= 1) {
                    fridayNightList = await shoppingList.getFridayNightList();
                }
                if (spesificShabbat.num_meal_at_home >= 2) {
                    shabbatMorningList = await shoppingList.getShabbatMorningList();
                }
                if (spesificShabbat.num_meal_at_home == 3) {
                    thirdMealList = await shoppingList.getThirdMealList();
                } 
                if (spesificShabbat.hosting == true) {
                hostingList = await shoppingList.getHostingList();

            }
            }
            else {
                if (spesificShabbat.Location == 'travel') {
                    visitingList = await shoppingList.getVisitingList();
                }
            }
           

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
                   list.length>0&&(
                    <ShowList
                        listToShow={list}
                        funcToSpesific={showShopping}
                    />
                   ) 
                ))}

            </ul>
        </>
    );
};











