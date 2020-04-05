import React from "react";

const defaultState = {
    leftovers: [
        { 'id':1, 'name': 'pizza', 'completed': false, 'amount': 2},
        { 'id':2, 'name': 'spagetti', 'completed': true, 'amount': 10},
    ]
};

const Context = React.createContext();
const UpdateContext = React.createContext();

const rootReducer = (state, action) => {
    switch (action.type) {
        case "finishLeftover":
            var leftovers = state.leftovers.map(x => 
                x.id === action.id ? { ...x, completed: action.change} : x);
            return {...state, leftovers}
        default:
            throw new Error(`${action.type} not implemented`);
    }
}

export const LeftoverProvider = ({children}) => {
    const [state, dispatch] = React.useReducer(rootReducer, defaultState);

    return (
        <Context.Provider value={state}>
            <UpdateContext.Provider value={dispatch}>
                {children}
            </UpdateContext.Provider>
        </Context.Provider>
    )

}

// Consumer (via dispatch fuction)
export const useLeftover = () => [
    React.useContext(Context),
    React.useContext(UpdateContext)
]

// TODO look at Buildlabs app