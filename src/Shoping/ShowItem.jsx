export const ShowItem = (props)=>{
    
    const { item ,deleteitem ,amount} = props;

    return(
        <>
        <li>{item.item} <input type="number" value={amount} onChange={()=>{
            
        }}/>
        <button onClick={()=>{
            deleteitem(item)
        }}>remove</button>
        </li>
         </>
    )
}