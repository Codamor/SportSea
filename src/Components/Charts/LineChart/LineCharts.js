import React from "react";
import PropTypes from "prop-types";

import {
    LineChart,
    Line,
    XAxis,
    Tooltip,
    ResponsiveContainer
} from 'recharts';


import "./LineCharts.scss";


class LineCharts extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {

        const CustomTooltip = ({ active, payload}) => {
            if (active && payload && payload.length) {
                return (
                    <div className="lineChart__tooltip">
                        <p>{`${payload[0].value}min`}</p>
                    </div>
                );
            }
            return null;
        };

        return (

            <div className="lineChart">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={this.props.averageSessions}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >

                        <XAxis
                            dataKey="day"
                            stroke="white" dataKey="day"
                            axisLine={false}
                            tickLine={false}
                        />

                        <Tooltip content={<CustomTooltip />}/>

                        <defs>
                            <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="70%"  stopColor="rgba(255,255,255,0.5)"/>
                                <stop offset="100%" stopColor="#fff"/>
                            </linearGradient>
                        </defs>


                        <Line
                            dot={false}
                            type="natural"
                            dataKey="sessionLength"
                            stroke="url(#linear)"
                            strokeWidth={4}
                            activeDot={{ stroke: 'white', strokeWidth: 5, r: 3 }}
                        />

                    </LineChart>
                </ResponsiveContainer>
            </div>

        );
    }
}


export default LineCharts;