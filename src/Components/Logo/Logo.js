import React from "react";
import {Link} from "react-router-dom";

import logo from "../../assets/img/logo.png";
import "./Logo.scss" ;

class Logo extends React.Component{
    render() {
        return (
            <Link to="/" className="logo">
                <img src={logo}
                     alt="Suivez votre activité quotidienne avec Sportsee"
                     title="Suivez votre activité quotidienne avec Sportsee"/>

                <h1 className="logo__title">
                    SportSee
                </h1>
            </Link>
        );
    }
}

export default Logo ;