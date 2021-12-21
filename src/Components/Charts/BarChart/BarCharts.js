import React from "react";
import PropTypes from "prop-types";
import {BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer} from "recharts";
import "./BarCharts.scss"

/**
 * Component for showing user activity
 * Display user activity with a bar chart
 *
 * @component
 * @example
 * <BarCharts sessions={this.state.sessions} />
 */
class BarCharts extends React.Component{

    render() {

        const CustomTooltip = ({ active, payload }) => {
            if (active && payload && payload.length) {
                return (
                    <div className="barChart__toolTip">
                        <p className="barChart__toolTip-text">{`${payload[0].value}kg`}</p>
                        <p className="barChart__toolTip-text">{`${payload[1].value}kCal`}</p>
                    </div>
                );
            }

            return null;
        };

        const legend = (value) => {
            let text="";
            if(value === "kilogram"){
                text= "Poids (kg)";
            }
            else{
                text= "Calories brûlées (kCal)";
            }
            return <span className="barChart__legend">{text}</span>;
        };

        return (
            <div className="barChart">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={this.props.sessions}
                        barCategoryGap={50}
                        barGap={10}
                        barSize={7} >

                        <CartesianGrid
                            vertical={false}
                            strokeDasharray="4"
                        />

                        <XAxis dataKey={"day"} tickLine={false}/>

                        <YAxis hide={true}/>

                        <Tooltip content={<CustomTooltip/>} />

                        <Legend
                            height={100}
                            formatter={legend}
                            iconSize={8}
                            iconType="circle"
                            align="right"
                            verticalAlign="top"/>

                        <text
                            className="barChart__title"
                            fontSize="15px"
                            x={70}
                            y={20}
                            textAnchor="middle"
                            fill="black"
                        > Activité quotidienne </text>

                        <Bar
                            dataKey="kilogram"
                            fill="black"
                            radius={[10, 10, 0, 0]}
                        />

                        <Bar dataKey="calories"
                             fill="red"
                             radius={[10, 10, 0, 0]}
                        />

                    </BarChart>
                </ResponsiveContainer>
            </div>


        );
    }

}

BarCharts.propTypes = {
    /**
     * user sessions
     */
    sessions: PropTypes.arrayOf(
        PropTypes.shape(
            {
                day: PropTypes.number.isRequired,
                kilogram: PropTypes.number.isRequired,
                calories: PropTypes.number.isRequired
            }
        )
    )
}

export default BarCharts ;