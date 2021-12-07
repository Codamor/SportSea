import React from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./Layouts/Header/Header";
import Container from "./Components/Container/Container";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Layouts/Main/Main";


class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <Header />
                <Container className="container--vertical">
                    <Sidebar />
                    <Main />
                </Container>
            </BrowserRouter>

        )
    }
}

export default App ;