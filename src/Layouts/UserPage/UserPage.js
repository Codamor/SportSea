import React from "react";
import Container from "../../Components/Container/Container";
import Main from "../../Components/Main/Main";
import Informations from "../../Components/Informations/Informations";
import {getUserActivity, getUserInformations} from "../../adapters/api";

class UserPage extends React.Component{
    constructor(props) {
        super(props);
        this.userId = this.props.match.params.id;
        this.state = {
            userName: ""
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
                        userName: data.userInfos.firstName
                    }
                )
            })


    }

}

export default UserPage ;