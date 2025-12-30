export const Food=(props)=> {
  const { food ,deleteFood ,setFood} = props;
  return (
    <>
      <li>
         <div style={{
          display:'flex',
          flexDirection:'row',
          alignItems:'center',
        // border: '1px solid black',
        // listStyleType: 'none',
        gap: '20px',
        // padding: '10px',
        // margin: '10px',
    
         //width: '350px',
        // height: '40px',
        // fontSize: '77%'
      }} className="foo" >
            <p><strong>Food:</strong> {food.name}, </p>
            <p><strong>Preparation time:</strong> {food.prepTime} minutes </p>
            <button onClick={()=>{

             deleteFood(food).then(data => {
                setFood(data);

             })
            }}>delete</button>
            <button>edit</button> 

        </div>
      </li>
    </>
  )
}


