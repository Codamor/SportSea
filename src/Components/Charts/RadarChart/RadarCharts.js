import React from "react";
import PropTypes from "prop-types";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

import "./RadarCharts.scss";
import "../Charts.scss" ;

/**
 * Component for showing user Performance
 * User performance is displayed in a radar chart
 *
 * @component
 * @example
 * <RadarCharts userPerformance={this.state.userPerformance} />
 */
class RadarCharts extends React.Component{

    render() {

        let data = this.props.userPerformance ;

            return (
                <div className="chart radarChart">
                    <ResponsiveContainer width="100%" height="100%" className="radarChart">
                        <RadarChart outerRadius={85} data={data}>
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
                </div>

            );

    }

}

RadarCharts.propTypes = {
    /**
     * user performance
     */
    userPerformance: PropTypes.arrayOf(
        PropTypes.shape(
            {
                kind: PropTypes.string.isRequired,
                value: PropTypes.number.isRequired
            }
        )
    )
}

export default RadarCharts ;