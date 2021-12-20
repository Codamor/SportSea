import React from "react";
import PropTypes from "prop-types";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import "./RadarCharts.scss";

class RadarCharts extends React.Component{

    render() {

        let data = this.props.userPerformance ;

            return (

                <ResponsiveContainer width="100%" height="100%" className="radarChart">
                    <RadarChart outerRadius={200} data={data}>
                        <PolarGrid
                            stroke="white" />
                        <PolarAngleAxis
                            dataKey="kind"
                            stroke = "white"
                            axisLine= {false}
                            tickLine={false}
                        />
                        <Radar
                            dataKey="value"
                            fill="red"
                            fillOpacity={0.8} />
                    </RadarChart>
                </ResponsiveContainer>
            );

    }

}

export default RadarCharts ;