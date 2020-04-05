import React from "react"
import { useLeftover } from "./Context";

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

    return(
        <p>
            <input 
                type="checkbox"
                checked={leftover.completed}
                onChange={onCheckedChange}
            />
            {leftover.name}
        </p>
    )
}

const List = () => {
    
    const [state] = useLeftover()

    return (
        <>
        <h4>List</h4>

        {state.leftovers.map(leftover => (
            <ListItem leftover={leftover}/>
        ))}

        </>
    )
}
export default List;