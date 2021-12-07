import React from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./Layouts/Header";


class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <Header />
            </BrowserRouter>

        )
    }
}

export default App ;