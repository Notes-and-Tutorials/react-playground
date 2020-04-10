import React from "react"
import { useLeftover } from "./Context";
import Create from "./Create";

const ListItem = ({leftover}) => {
    // eslint-disable-next-line
    const [state, dispatch] = useLeftover();

    const onCheckedChange = event => {
        dispatch({
            type: "finishLeftover",
            id: leftover.id,
            change: event.target.checked,
        });
    };

    const onDelete = () => {
        dispatch({
            type: "deleteLeftover",
            id: leftover.id,
        })
    }


    return(
        <p>
            <input 
                type="checkbox"
                checked={leftover.completed}
                onChange={onCheckedChange}
            />
            {leftover.name}
            <button onClick={onDelete}>Delete</button>
        </p>
    )
}

const List = () => {
    
    const [state] = useLeftover()

    return (
        <>
        <Create />
        <h4>List</h4>

        {state.leftovers.map(leftover => (
            <ListItem leftover={leftover}/>
        ))}

        </>
    )
}
export default List;