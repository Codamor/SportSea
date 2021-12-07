import React from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./Layouts/Header/Header";
import Container from "./Components/Container/Container";
import Logo from "./Components/Logo/Logo";


class App extends React.Component{

    render(){
        return(
            <BrowserRouter>
                <Header />
                <Container>

                </Container>
            </BrowserRouter>

        )
    }
}

export default App ;