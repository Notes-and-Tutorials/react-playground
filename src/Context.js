import React from "react";

const data = [
    { 'name': 'pizza', 'completed': false, 'amount': 2},
    { 'name': 'spagetti', 'completed': true, 'amount': 10},
]

const ItemContext = React.createContext();

export const Provider = (props) => (
    <ItemContext.Provider value={data}>
        {props.children}
    </ItemContext.Provider>
)

// Consumer (via dispatch fuction)
export const useTodo = () => [
    React.useContext(ItemContext)
]
