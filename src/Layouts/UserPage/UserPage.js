import React from "react";
import PropTypes from "prop-types";
import {getUserActivity, getUserAverageSessions, getUserInformations, getUserPerformance} from "../../adapters/api";

import Container from "../../Components/Container/Container";
import Main from "../../Components/Main/Main";
import PieCharts from "../../Components/Charts/PieChart/PieCharts";


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
                this.setState(
                    {
                        averageSessions: data.sessions
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