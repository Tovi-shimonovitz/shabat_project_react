export const ShowList = (props) => {
    const {listToShow, funcToSpesific} = props

    return  (
        <>
         
            <ul>
                {listToShow?.map((item, index) => (
                    <li key={index}>
                        <input type="checkbox" />
                        {funcToSpesific(item)}
                    </li>
                ))}
            </ul>


        </>
    )

}