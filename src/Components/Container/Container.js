import React from "react";
import PropTypes from 'prop-types';

import "./Container.scss";

/**
 * Component to display components content
 * Can display horizontal or vertical layout
 * Use flex css properties
 *
 * @component
 * @example
 * <Container>
 *     <Component>
 * </Container>
 */
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
    /**
     * component
     */
    children: PropTypes.node.isRequired
}


export default Container ;