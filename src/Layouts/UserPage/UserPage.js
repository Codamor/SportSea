import React from "react";
import {getUserActivity, getUserAverageSessions, getUserInformations, getUserPerformance} from "../../Service/api";

import Container from "../../Components/Container/Container";
import Main from "../../Components/Main/Main";
import PieCharts from "../../Components/Charts/PieChart/PieCharts";
import LineCharts from "../../Components/Charts/LineChart/LineCharts";
import BarCharts from "../../Components/Charts/BarChart/BarCharts";
import RadarCharts from "../../Components/Charts/RadarChart/RadarCharts";
import KeyData from "../../Components/KeyData/KeyData";
import Informations from "../../Components/Informations/Informations";

import calLogo from "../../assets/img/calories-icon.png" ;
import proLogo from "../../assets/img/protein-icon.png" ;
import carLogo from "../../assets/img/carbs-icon.png" ;
import fatLogo from "../../assets/img/fat-icon.png" ;


/**
 * Component for showing the user page main content
 *
 * @component
 * @example
 <UserPage />
 */
class UserPage extends React.Component {
    constructor(props) {
        super(props);
        this.userId = this.props.match.params.id;
        this.state = {
            userName: "",
            userSessions: [],
            averageSessions: [],
            userPerformance: [],
            todayScore: 0,
            keyData: []
        }
    }

    render() {

        return (
            <Main>

               <Informations userName={this.state.userName} />


                <Container className="container container--horizontal">

                    <Container className="container container--vertical">
                        <BarCharts sessions={this.state.userSessions} />

                        <Container className="container container--horizontal">
                            <LineCharts averageSessions={this.state.averageSessions} />
                            <RadarCharts userPerformance={this.state.userPerformance} />
                            <PieCharts todayScore={this.state.todayScore} />
                        </Container>

                    </Container>

                    <Container className="container container--vertical">
                        <KeyData logo={calLogo} data={this.state.keyData.calorieCount + "kCal"} label="Calories" />
                        <KeyData logo={proLogo} data={this.state.keyData.proteinCount + "g"} label="Proteines" />
                        <KeyData logo={carLogo} data={this.state.keyData.carbohydrateCount + "g"} label="Glucides" />
                        <KeyData logo={fatLogo} data={this.state.keyData.lipidCount + "g"} label="Lipides" />
                    </Container>

                </Container>

            </Main>
        );
    }

    componentDidMount() {

        getUserInformations(this.userId)
            .then(data => {
                this.setState(
                    {
                        userName: data.userInfos.firstName,
                        todayScore: data.todayScore,
                        keyData: data.keyData
                    }
                )
            })

        getUserActivity(this.userId)
            .then(data => {
                this.setState(
                    {
                        userSessions: data
                    }
                )
            })

        getUserAverageSessions(this.userId)
            .then(data => {
                this.setState(
                    {
                        averageSessions: data
                    }
                )
            })


        getUserPerformance(this.userId).then(data => {
            this.setState(
                {
                    userPerformance: data
                }
            )
        })
    }
}

export default UserPage ;