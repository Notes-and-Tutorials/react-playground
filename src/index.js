// Q: 
// what is the index file?
// what is react-dom?
// root element
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { LeftoverProvider } from "./Context";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <LeftoverProvider>
        <App />
    </LeftoverProvider>
    ,
    rootElement
)
