import React from "react";
import {BrowserRouter} from "react-router-dom";
import Header from "./Layouts/Header/Header";
import Container from "./Components/Container/Container";
import Sidebar from "./Components/Sidebar/Sidebar";
import Main from "./Layouts/Main/Main";
import KeyData from "./Components/KeyData/KeyData";

import logo from "../src/assets/img/calories-icon.png"


class App extends React.Component{

    render(){

        return(
            <BrowserRouter>
                <Header />
                <Container className="container--horizontal">
                    <Sidebar />
                    <Main>
                        <KeyData
                            logo={logo}
                            data={"1,930kCal"}
                            label={"Calories"}
                        />
                    </Main>
                </Container>
            </BrowserRouter>

        )
    }

}

export default App ;