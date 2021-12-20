import React from "react";
import PropTypes from "prop-types";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

import "./RadarCharts.scss";

class RadarCharts extends React.Component{
    constructor(props) {
        super(props);
    }

    formatRawData(rawData){
        let userPerformanceFormatedData = [] ;

        for (let i = 0; i < rawData.data.length; i++) {
            userPerformanceFormatedData.push(
                {
                    kind: rawData.kind[i+1],
                    value:rawData.data[i].value
                }
            )
        }
        return userPerformanceFormatedData ;
    }




    render() {

        if(this.props.userPerformance.length !== 0){
            let data = this.formatRawData(this.props.userPerformance)

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

        } else {
            return (
                <div>

                </div>
            )
        }


    }

}

export default RadarCharts ;