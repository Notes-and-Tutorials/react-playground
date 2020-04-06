import React from "react";
import { useLeftover } from "./Context";

const Create = () => {
    // eslint-disable-next-line
    const [state, dispatch] = useLeftover();
    const [leftover, setLeftover] = React.useState("");

    const onLeftoverAdd = event => setLeftover(event.target.value);

    const onAdd = () => {
        dispatch({
            type: "addLeftover",
            leftover: {
                id: 100,
                name: leftover,
                completed: false,
            }
        })
        setLeftover("");
    };



    return (
        <>
            <input type="text" value={leftover} onChange={onLeftoverAdd} />
            <button onClick={onAdd}>Add</button>
        </>
    )
}

export default Create;