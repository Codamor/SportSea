import React from "react";
import PropTypes from "prop-types";
import {getUserActivity, getUserAverageSessions, getUserInformations, getUserPerformance} from "../../adapters/api";

import Container from "../../Components/Container/Container";
import Main from "../../Components/Main/Main";
import PieCharts from "../../Components/Charts/PieChart/PieCharts";
import LineCharts from "../../Components/Charts/LineChart/LineCharts";
import {Bar, Line, Radar} from "recharts";
import BarCharts from "../../Components/Charts/BarChart/BarCharts";
import RadarCharts from "../../Components/Charts/RadarChart/RadarCharts";
import KeyData from "../../Components/KeyData/KeyData";


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

                <Container className="container--vertical">


                    <PieCharts todayScore={this.state.todayScore}/>


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