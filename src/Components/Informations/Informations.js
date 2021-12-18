import React from "react";
import PropTypes from "prop-types";

import "./Informations.scss"

class Informations extends React.Component{
    constructor(props) {
        super(props);
    }


    render(){
        return(
            <div className="informations">
                <h1 className="informations__title">
                    Bonjour <span className="informations__title--red">{this.props.userName}</span>
                </h1>
                <h2 className="informations__subTitle">
                    Félicitations ! Vous avez explosé vos objectifs hier &#x1F44F;
                </h2>
            </div>
        )
    }
}

Informations.propTypes = {
    userName: PropTypes.string.isRequired
}

export default Informations ;