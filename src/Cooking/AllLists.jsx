import { useEffect, useState } from 'react';
import { getBasicCookingArray,addBasic,getFirstSeudaArray,addFirst,getSecondSeudaArray,addSecond,getThirdSeudaArray,addThird,deleteBasic,deleteFirst,deleteSecond,deleteThird } from './data/cooking.js'
import { Food } from './Food.jsx'
import { FoodList } from './FoodList.jsx'

export const AllLists=()=>{

  return (
    <>
        <div style={{
                listStyleType: 'none',
                display: 'flex',
                flexWrap: 'wrap',
                flexDirection:'column',
                gap: '2%',
            }}>
            <FoodList getFoodArray ={getBasicCookingArray} addNewFood={addBasic} deleteFood={deleteBasic} nameCook={"Basic"} />
            <br /><br /><br /><br />
            <FoodList getFoodArray ={getFirstSeudaArray} addNewFood={addFirst} deleteFood={deleteFirst} nameCook={"First Seuda"} />
             <br /><br /><br /><br />
            <FoodList getFoodArray ={getSecondSeudaArray} addNewFood={addSecond} deleteFood={deleteSecond} nameCook={"Second Seuda"} />
            <br /><br /><br /><br />
            <FoodList getFoodArray ={getThirdSeudaArray} addNewFood={addThird} deleteFood={deleteThird} nameCook={"Third Seuda"} />

        </div>

    </>
  )
}

