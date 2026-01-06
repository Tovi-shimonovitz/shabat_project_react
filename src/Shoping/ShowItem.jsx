import { useState } from "react";

export const ShowItem = (props) => {

    const { item, deleteitem } = props;

    const [amount, setAmount] = useState(props.amount);

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };
    return (
        <>
            <li>{item.item}  <input type="number"value={amount} onChange={handleAmountChange} />
                <button onClick={() => {
                    deleteitem(item)
                }}>remove</button>
            </li>
        </>
    )
}