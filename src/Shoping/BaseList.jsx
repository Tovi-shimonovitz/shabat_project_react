import { useState } from 'react'


export function BaseList() {

  let [list, setList] = useState(['Diapers','Tissue','Medications']);

  const remove = (item)=>{
    list = list.filter(t => t!== item);
    setList(list);
  }

  const addItem = (event)=>{
    debugger;
    const t = event.target.addItem.value;
    if(t!== ''){
      list.push(t);
      setList(list);
    }
  }

  return (
    <>
      <ul>
           { list.map(t => <h4>{t}</h4>  ) }
      </ul>
    
    <form  onSubmit={addItem} >
       <label htmlFor="addItem">add item</label>
        <input type="text" name='addItem' />
        <button >add</button></form>
       
    </>
   
  )
}

