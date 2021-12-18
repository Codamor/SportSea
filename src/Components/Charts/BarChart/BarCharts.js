import React from "react";
import PropTypes from "prop-types";
import {BarChart, CartesianGrid, XAxis,YAxis, Tooltip, Legend, Bar} from "recharts";
import "./BarCharts.scss"

class BarCharts extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {

            return (
                <BarChart width={730} height={250} data={this.props.sessions}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="kilogram" fill="#8884d8" />
                    <Bar dataKey="calories" fill="#82ca9d" />
                </BarChart>
            );
        }

}

export default BarCharts ;