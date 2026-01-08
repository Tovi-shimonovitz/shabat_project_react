import { useEffect, useState } from 'react';
import { getBasicCookingArray, addBasic, getFirstSeudaArray, addFirst, getSecondSeudaArray, addSecond, getThirdSeudaArray, addThird, deleteBasic, deleteFirst, deleteSecond, deleteThird, putBasic, putFirst,putSecond,putThird } from '../data/cooking.js'
import { Food } from './Food.jsx'
import { FoodList } from './FoodList.jsx'




export const AllLists = () => {

  return (
    <>
      <div style={{
        listStyleType: 'none',
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'column',
        gap: '2%',
      }}>
        <FoodList getFoodArray={getBasicCookingArray} addNewFood={addBasic} deleteFood={deleteBasic} nameCook={"Basic"} putFood={putBasic} />
        <br /><br /><br /><br />
        <FoodList getFoodArray={getFirstSeudaArray} addNewFood={addFirst} deleteFood={deleteFirst} nameCook={"First Seuda"} putFood={putFirst} />
        <br /><br /><br /><br />
        <FoodList getFoodArray={getSecondSeudaArray} addNewFood={addSecond} deleteFood={deleteSecond} nameCook={"Second Seuda"} putFood={putSecond} />
        <br /><br /><br /><br />
        <FoodList getFoodArray={getThirdSeudaArray} addNewFood={addThird} deleteFood={deleteThird} nameCook={"Third Seuda"} putFood={putThird} />

      </div>
  

     

    </>
  )
}

