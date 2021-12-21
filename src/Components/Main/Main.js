import React from "react";
import PropTypes from "prop-types";

import "./Main.scss" ;

/**
 * Component for showing main content
 *
 * @component
 * @example
 * <Main>
 *     <Component />
 * </Main>
 */
class Main extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <main className="main">
                {
                    this.props.children
                }
            </main>
        );
    }
}


Main.propTypes = {
    /**
     * component
     */
    children: PropTypes.node.isRequired
}


export default Main ;