import React from "react";
import PropTypes from "prop-types";

import "./Header.scss"

/**
 * Component for showing the header
 *
 * @component
 * @example
 * <Header>
 *     <Logo>
 *     <Navigation>
 * </Header>
 */
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
    /**
     * component
     */
    children: PropTypes.node.isRequired
}

export default Header ;