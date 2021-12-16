import React from "react";
import PropTypes from "prop-types";

import "./Main.scss" ;

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
    children: PropTypes.node.isRequired
}


export default Main ;