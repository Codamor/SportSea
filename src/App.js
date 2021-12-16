import React from "react";
import {BrowserRouter} from "react-router-dom";
import PropTypes from "prop-types";

import Header from "./Layouts/Header/Header";
import Container from "./Components/Container/Container";
import Sidebar from "./Layouts/Sidebar/Sidebar";
import Main from "./Layouts/Main/Main";
import KeyData from "./Components/KeyData/KeyData";

class App extends React.Component{

    render(){

        return(
            <BrowserRouter>
                <Header />
                <Container className="container--horizontal">
                    <Sidebar />
                    <Main>
                        <Container>
                            <KeyData />
                        </Container>

                    </Main>
                </Container>
            </BrowserRouter>

        )
    }
}

export default App ;