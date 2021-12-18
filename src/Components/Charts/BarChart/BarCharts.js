import React from "react";
import PropTypes from "prop-types";
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer, Text} from "recharts";
import "./BarCharts.scss"

class BarCharts extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {

            return (
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart  data={this.props.sessions} barGap={50} barGap={8} barSize={7}>
                        <CartesianGrid vertical={false} strokeDasharray="4" />
                        <XAxis dataKey={"day"} tickLine={false}/>
                        <YAxis hide={true}/>
                        <Tooltip />
                        <Legend verticalAlign="top" align="right" iconType="circle" iconSize={10} />
                        <Bar dataKey="kilogram" fill="black"   radius={[10, 10, 0, 0]}/>
                        <Bar dataKey="calories" fill="red" radius={[10, 10, 0, 0]}/>
                    </BarChart>
                </ResponsiveContainer>

            );
        }

}

export default BarCharts ;