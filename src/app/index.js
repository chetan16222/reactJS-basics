import React from "react";   //adding dependacy to component
import ReactDOM from "react-dom"; 

// create a component App is our root component
// component have a lots builtin method render is one of them
// after that how to run that component  go to index.html setup a hook
class App extends React.Component{
    render() {
        return ();
    }
}

ReactDOM.render(<App/>,window.document.getElementById("app"));