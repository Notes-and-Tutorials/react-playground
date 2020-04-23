import React from "react";

const defaultState = {
    leftovers: [
        { 'id':1, 'name': 'pizza', 'completed': false, 'amount': 2},
        { 'id':2, 'name': 'pork', 'completed': true, 'amount': 10},
        { 'id':3, 'name': 'pasta', 'completed': true, 'amount': 2},
    ]
};

// Context provides a way to pass data through the component tree without having to pass props down manually at every level.
const Context = React.createContext(); // read
const UpdateContext = React.createContext(); // write 

// A reducer is a function that determines changes to an application’s state. 
// It uses the action it receives to determine this change.
const rootReducer = (state, action) => {
    switch (action.type) {
        case "finishLeftover":
            // if id matched what you clicked, that take that action.change (T/F)
            // if id doesn't match, keep it
            var leftovers = state.leftovers.map(obj => 
                obj.id === action.id ? { ...obj, completed: action.change} : obj);
            return {...state, leftovers}
        case "deleteLeftover":
            // keep everything that you didn't hit delete on
            return {...state, leftovers: state.leftovers.filter(obj => obj.id !== action.id)};
        // this component on a different page
        case "addLeftover":
            return {...state, leftovers: [action.leftover, ...state.leftovers]};

        default:
            throw new Error(`${action.type} not implemented`);
    }
}

// Wrapped the <App /> in this provider so that all children have access to the state
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

// Order matters or calling in other components
// best practice: first is state, second is dispatch
export const useLeftover = () => [
    React.useContext(Context),
    React.useContext(UpdateContext) 
]
// Long syntax for returning an array from an arrow function
// export const useLeftover = () => {
//     return [ React.useContext(Context), React.useContext(UpdateContext) ]
// }
