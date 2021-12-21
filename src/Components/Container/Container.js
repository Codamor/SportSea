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

    render(){
        return(
            <div className={`${this.props.className}`}>
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