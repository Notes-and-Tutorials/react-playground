import React from "react"

const data = [
    { 'name': 'pizza', 'completed': false, 'amount': 2},
    { 'name': 'spagetti', 'completed': true, 'amount': 10},
]

const ListItem = (props) => {

    const [used, setUsed] = React.useState(props.item.completed);

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
            {props.item.name}
        </p>
    )
}


const List = () => {
    return (
        <>
        <h4>List</h4>
        {data.map(item => (
            <ListItem item={item}/>
        ))}
        </>
    )
}
export default List;