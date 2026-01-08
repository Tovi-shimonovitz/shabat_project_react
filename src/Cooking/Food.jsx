import React, { useState } from 'react';

export const Food = (props) => {
  const { food, deleteFood, setFood } = props;
  const id = food.id;
  const [name, setName] = useState(food.name);
  const [prepTime, setPrepTime] = useState(food.prepTime);
  const [active, setActive] = useState(true)
  let style = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
      width: '100%'


  }

  let styleNone = { display: 'none' }

  return (
    <>
      <li>
        {/*this div is for showing the food details when I do not edit it*/}
        <div style={active ? style : styleNone}>
          <p><strong>Food:</strong> {name}   </p>
          <p><strong>Preparation time:</strong> {prepTime} minutes </p>
          <button onClick={() => {

            deleteFood(food).then(data => {
              setFood(data);
            })
          }}>delete</button>
          <button onClick={(event) => {
            event.preventDefault();
            setActive(!active);
          }}>edit</button>

        </div>

        {/*this div is for edit it*/}
        <div style={active ? styleNone : style}>
          <input type="text" name="nameN" placeholder="name" onChange={(e) => setName(e.target.value)} style={{ width: '30%' }}/>
          <input type="number" name="prep" placeholder="prepTime" onChange={(e) => setPrepTime(e.target.value)} style={{ width: '30%' }}/>
          <button onClick={(event) => {
            event.preventDefault();
            setActive(!active);
          }}>save</button>
          <button onClick={(event) => {
            event.preventDefault();
            setActive(!active);
          }}>cancel</button>

        </div>
      </li>
    </>
  )
}


