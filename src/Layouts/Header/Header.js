import React from "react";
import PropTypes from "prop-types";

import Logo from "../../Components/Logo/Logo";
import Navigation from "../../Components/Navigation/Navigation";

import "./Header.scss"

class Header extends React.Component{
    render() {
        return(
            <header className="header">
                <Logo />
                <Navigation />
            </header>
        )
    }
}

Header.propTypes = {
    children: PropTypes.node.isRequired
}


export default Header ;