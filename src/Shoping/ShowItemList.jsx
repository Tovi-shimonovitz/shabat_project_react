import { useState, useEffect } from 'react'
import { ShowItem } from './ShowItem';

export const ShowItemList = (props) => {
    let [list, setList] = useState([]);
    let [inputValue, setInputValue] = useState('');
    let [amountValue, setAmountValue] = useState(1);

    let keyUp = 1;
    useEffect(() => {

        setList(props.list);

    }, []);



    const remove = (item) => {
        list = list.filter(t => t !== item);
        setList(list);
    }

    const addItem = (event) => {
        event.preventDefault();
        if (inputValue) {
            setList([...list, { inputValue, }]);
            setInputValue('');
        }
    }

    return (
        <>
            <ul>
                {list.map(t => <ShowItem item={t} deleteitem={remove} amount={amountValue} /> ) }
            </ul>

            <form onSubmit={addItem} >
                <input type="text" id="newItem" value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} />
                <input type="number" min="1" id="newItemAmount" value={amountValue}
                    onChange={(e) => setAmountValue(e.target.value)} />
                <button type='submit'>add</button>
            </form>

        </>

    )
}


