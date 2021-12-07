import React from "react";
import "./Navigation.scss" ;

class Navigation extends React.Component{

    render() {
        return (
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <a className="navigation__link">
                            Accueil
                        </a>
                        <a className="navigation__link">
                            Profil
                        </a>
                        <a className="navigation__link">
                            Réglage
                        </a>
                        <a className="navigation__link">
                            Communauté
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation ;