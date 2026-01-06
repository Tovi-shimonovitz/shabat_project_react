export const ShowList = (props) => {
    const {listToShow, funcToSpesific} = props

    return  (
        <>
            {/* <p><strong>list for: </strong> {listName}  tasks </p> */}
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