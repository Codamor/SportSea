import React from "react";
import "./Navigation.scss" ;

class Navigation extends React.Component{

    render() {
        return (
            <nav className="navigation">
                <ul className="navigation__list">
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            Accueil
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            Profil
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            Réglage
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a href="#" className="navigation__link">
                            Communauté
                        </a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation ;