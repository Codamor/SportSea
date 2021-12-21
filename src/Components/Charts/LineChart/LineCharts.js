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

/**
 * Component for showing user average sessions
 * Display average sessions in a line chart
 *
 * @component
 * @exemple
 * <LineCharts averageSessions={this.props.averageSessions} />
 */
class LineCharts extends React.Component{

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
                            stroke="white"
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

                        <text
                            className="lineChart__text"
                            x="5%"
                            y="15%"
                        >
                            Durée moyenne des
                        </text>

                        <text
                            className="lineChart__text"
                            x="5%"
                            y="20%"
                        >
                            sessions
                        </text>

                    </LineChart>
                </ResponsiveContainer>
            </div>

        );
    }
}

LineCharts.propTypes = {
    /**
     * user average sessions
     */
    averageSessions: PropTypes.arrayOf(
        PropTypes.shape(
            {
                day: PropTypes.string.isRequired,
                sessionLength: PropTypes.number.isRequired
            }
        )
    )
}


export default LineCharts;