import React from "react";
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

export default Container ;