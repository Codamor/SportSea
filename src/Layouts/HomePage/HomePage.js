import React from "react";
import "./HomePage.scss"

class HomePage extends React.Component{

    render() {

        return (
            <main className="homePage">
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
            </main>
        );
    }

}

export default HomePage ;