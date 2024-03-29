import React from "react";

import Main from "../../Components/Main/Main";

/**
 * Component for showing the home page main content
 *
 * @component
 * @example
 * <HomePage />
 */
class HomePage extends React.Component{

    render() {

        return (
            <Main>
                <h1 className="homePage__title">
                    Accueil - en cours de conception
                </h1>
                <h2 className="homePage__sub-title">
                    Veuillez indiquer les URL suivantes pour tester l'affichage du tableau de bord utilisateur
                </h2>

                <h3>Utilisateur 12</h3>
                <p>/user/12</p>

                <h3>Utilisateur 18</h3>
                <p>/user/18</p>
            </Main>
        );
    }

}

export default HomePage ;