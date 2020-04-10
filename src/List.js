import React from "react";

const items = [
    { 'id': 11, 'name': 'tomatoe sauce', 'size': '12 oz can', 'amount': 5 },
    { 'id': 12, 'name': 'spagetti', 'size': '16 oz box', 'amount': 2 },
];

const ListItem = ({item}) => (
    <li>{item.name}</li>
);

const List = () => {

    return (
        <ul>
            {items.map(i => (
                <ListItem item={i} />
            ))}
        </ul>
    )
};

export default List;