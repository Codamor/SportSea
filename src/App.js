import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PropTypes from "prop-types";


import Header from "./Layouts/Header/Header";
import Logo from "./Components/Logo/Logo";
import Navigation from "./Components/Navigation/Navigation";
import Container from "./Components/Container/Container";
import Sidebar from "./Layouts/Sidebar/Sidebar";
import Main from "./Layouts/Main/Main";
import MainUser from "./Layouts/Main/MainUser";

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
                    <Routes>
                        <Route exact path="/" element={Main} />
                        <Route path="/user/:id" element={MainUser} />
                    </Routes>
                </Container>
            </BrowserRouter>

        )
    }
}

BrowserRouter.propTypes = {
    children: PropTypes.node.isRequired
}

export default App ;