import React from "react";
import PropTypes from 'prop-types';

import "./Container.scss";

class Container extends React.Component{
    constructor(props) {
        super(props);

    }

    render(){
        return(
            <div className={`container ${this.props.className}`}>
                {
                    this.props.children
                }
            </div>
        )
    }
}

Container.propTypes = {
    children: PropTypes.node.isRequired
}


export default Container ;