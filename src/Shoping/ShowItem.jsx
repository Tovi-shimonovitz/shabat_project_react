export const ShowItem = (props)=>{
    
    const { item ,deleteitem ,amount,setItem} = props;

    return(
        <>
        <li>{item.name} <input type="number" value={amount} onChange={setItem}/>
        <button onClick={()=>{
            deleteitem()
        }}>remove</button>
        </li>
         </>
    )
}