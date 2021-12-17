import React from "react";

class UserPage extends React.Component{
    constructor(props) {
        super(props);
        this.userId = this.props.match.params.id;
    }

    render() {


        return (
            <main>

            </main>
        );
    }

}

export default UserPage ;