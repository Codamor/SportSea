import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";


import Header from "./Components/Header/Header";
import Logo from "./Components/Logo/Logo";
import Navigation from "./Components/Navigation/Navigation";
import Container from "./Components/Container/Container";
import Sidebar from "./Components/Sidebar/Sidebar";
import HomePage from "./Layouts/HomePage";
import UserPage from "./Layouts/UserPage";

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
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        <Route path="/user/:id" component={UserPage} />
                    </Switch>
                </Container>
            </BrowserRouter>

        )
    }
}

BrowserRouter.propTypes = {
    children: PropTypes.node.isRequired
}

export default App ;