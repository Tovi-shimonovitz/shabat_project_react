import { useEffect, useState } from 'react';
import { Food } from './Food.jsx'

export const FoodList=(props)=>{
    const { getFoodArray, addNewFood,nameCook, deleteFood } = props;

  const [food, setFood] = useState([]);
  // const [first, sesFirst] = useState([]);
  // const [second, setSecond] = useState([]);
  // const [third, setThird] = useState([]);

    useEffect(() => {
        getFoodArray().then((res) => {
            setFood(res);
        })
    }, [])

   const addFood = (event)=>{
        event.preventDefault();
        const newF = {
            id:food.length+1,
            name: event.target.name.value,
            prepTime: event.target.prepTime.value,
        }
        console.log(newF);
        event.target.reset();
        addNewFood(newF).then(data => {
            setFood(data);
        })
   }

  return (
    <>
    <div  style={{
                listStyleType: 'none',
                display: 'flex',
                flexDirection:'column',
                flexWrap: 'wrap',
                gap: '1%',
            }}>
          <div> 
        <h1>The Food for {nameCook}</h1>
        <ul style={{
                listStyleType: 'none',
                display: 'flex',
                flexDirection:'column',
                flexWrap: 'wrap',
                gap: '1%',
            }}>
                {food.map(f => <Food key={f.id} food ={f} deleteFood={deleteFood} setFood={setFood}/>)}
        </ul>
        </div> 
         <h3>form to add new food for {nameCook}: </h3>
            <form onSubmit={addFood}>
                <input type="text" name="name" placeholder='name' /> <br />
                <input type="text" name='prepTime' placeholder='prepTime' /> <br />
                <br />
                <button> add new food </button>
            </form>
        </div>

    </>
  )
}

