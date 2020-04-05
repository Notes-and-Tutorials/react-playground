import React from "react"
import { useTodo } from "./Context";

const ListItem = ({item}) => {

    const [used, setUsed] = React.useState(item.completed);

    const onCheckedChange = (event) => {
        setUsed(event.target.checked)
    }

    return(
        <p>
            <input 
                type="checkbox"
                checked={used}
                onChange={onCheckedChange}
            />
            {item.name}
        </p>
    )
}


const List = () => {
    const [state] = useTodo()
    return (
        <>
        <h4>List</h4>
        {state.map(item => (
            <ListItem item={item}/>
        ))}
        </>
    )
}
export default List;