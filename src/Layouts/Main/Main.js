import React from "react";
import "./Main.scss" ;

class Main extends React.Component{
    constructor(props){
        super(props)
    }

    render() {
        return (
            <main className="main">
                {
                    this.props.children
                }
            </main>
        );
    }
}

export default Main ;