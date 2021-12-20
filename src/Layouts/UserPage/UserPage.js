import React from "react";
import PropTypes from "prop-types";
import {getUserActivity, getUserAverageSessions, getUserInformations, getUserPerformance} from "../../adapters/api";

import Container from "../../Components/Container/Container";
import Main from "../../Components/Main/Main";
import PieCharts from "../../Components/Charts/PieChart/PieCharts";
import LineCharts from "../../Components/Charts/LineChart/LineCharts";


class UserPage extends React.Component{
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
                    
                    <LineCharts averageSessions={this.state.averageSessions} />

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
                        userSessions: data.sessions
                    }
                )
            })

        getUserAverageSessions(this.userId)
            .then(data => {

                let formatedData = [] ;
                let days = ["L", "M", "M", "J", "V", "S", "D"] ;

                for (let i = 0; i < data.sessions.length; i++) {
                    formatedData.push(
                        {
                            day: days[i],
                            sessionLength: data.sessions[i].sessionLength
                        }
                    )
                }

                this.setState(
                    {
                        averageSessions: formatedData
                    }
                )
            })


        getUserPerformance(this.userId).then(data =>{
            this.setState(
                {
                    userPerformance: data
                }
            )
        })
    }

}

Main.propTypes = {
    children: PropTypes.node.isRequired
}

export default UserPage ;