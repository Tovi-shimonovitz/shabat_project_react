import { useState, useEffect } from 'react'


export function BaseList() {
  let [list, setList] = useState([]);
  let [inputValue, setInputValue] = useState('');
  let keyUp = 1;
  useEffect(() => {

    setList(['Diapers', 'Tissue', 'Medications']);

  }, []);



  const remove = (item) => {
    debugger;
    list = list.filter(t => t !== item);
    setList(list);
  }

  const addItem = (event) => {
    event.preventDefault();
    if (inputValue) {
      setList([...list, inputValue]);
      setInputValue('');
    }
  }

  return (
    <>
      <ul>
        {list.map(t => <li key={keyUp++}> {t} <button onClick={() => remove(t)}>remove</button> </li>)}
      </ul>

      <form onSubmit={addItem} >
        <input type="text" id="newItem" value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} />
        <button type='submit'>add</button>
      </form>

    </>

  )
}

