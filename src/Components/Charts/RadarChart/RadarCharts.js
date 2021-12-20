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

        return(
            <div>

            </div>
        )


    }

}

export default RadarCharts ;