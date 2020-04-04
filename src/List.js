import React from "react"

const data = [
    { 'name': 'pizza', 'completed': false, },
    { 'name': 'spagetti', 'completed': true, },
]


const List = () => {
    return (
        <>
        <h4>List</h4>
        {data.map(item => (
            <p>{item.name}</p>
        ))}
        </>
    )
}

export default List;