import React from "react";
import Logo from "../Components/Logo/Logo";

class Header extends React.Component{
    render() {
        return(
            <header className="header">
                <Logo />
            </header>
        )
    }
}


export default Header ;