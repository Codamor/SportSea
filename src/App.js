import React from "react";
import {BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";

import Header from "./Layouts/Header/Header";
import Container from "./Components/Container/Container";
import Sidebar from "./Layouts/Sidebar/Sidebar";
import Main from "./Layouts/Main/Main";
import Logo from "./Components/Logo/Logo";
import Navigation from "./Components/Navigation/Navigation";

class App extends React.Component{

    render(){

        return(
            <BrowserRouter>

                <Header>
                    <Logo />
                    <Navigation />
                </Header>

                <Container className="container--horizontal">
                    <Sidebar />
                    <Main>

                    </Main>
                </Container>
            </BrowserRouter>

        )
    }
}

BrowserRouter.propTypes = {
    children: PropTypes.node.isRequired
}

export default App ;