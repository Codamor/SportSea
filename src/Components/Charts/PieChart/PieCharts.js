import React from "react";
import PropTypes from "prop-types";
import {ResponsiveContainer, PieChart, Pie, Cell} from "recharts";

import "../Charts.scss" ;
import "./PieCharts.scss";


/**
 * Component for showing user day score
 * Day score is displayed in a pie chart
 *
 * @component
 * @example
 * <PieCharts todayScore={this.state.todayScore} />
 */
class PieCharts extends React.Component{

    render() {

        let todayScore = this.props.todayScore ;
        let todayScorePercent = todayScore * 100 ;

        let data = [
            {
                name:"Acheived",
                value: todayScorePercent
            },
            {
                name:"toAchieve",
                value: 100 - todayScorePercent
            }
        ]

        let filling = [
            {
                name: "Filling",
                value: 1
            }
        ];

        let colors = ["red", "#fbfbfb"];


        return (
            <div className="chart pieChart">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius="60%"
                            outerRadius="70%"
                            paddingAngle={5}
                            dataKey="value"
                            startAngle={90}
                            endAngle={450}
                            cy="55%"
                            opacity="100"
                            cornerRadius={20}
                        >

                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Pie>
                        <Pie
                            cy="55%"
                            data={filling}
                            dataKey="value"
                            nameKey="name"
                            outerRadius="60%"
                            fill="white"
                        />
                        <text fontSize="15px"
                              x="20%"
                              y="20%"
                              textAnchor="middle"
                              fill="black"
                        >
                            Score </text>

                        <text className="pieChart__value" x="50%" y="50%">
                            {todayScorePercent +"%"}
                        </text>
                        <text className="pieChart__text" x="50%" y="60%">
                            {"de votre"}
                        </text>
                        <text className="pieChart__text" x="50%" y="70%">
                            {"objectif"}
                        </text>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        );
    }
}

PieCharts.propTypes = {
    /**
     * user day score
     */
    todayScore: PropTypes.number.isRequired
}


export default PieCharts ;