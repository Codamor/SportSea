import React from "react";
import PropTypes from "prop-types";

import "./Header.scss"

class Header extends React.Component{
    render() {
        return(
            <header className="header">
                {
                    this.props.children
                }
            </header>
        )
    }
}

Header.propTypes = {
    children: PropTypes.node.isRequired
}

export default Header ;