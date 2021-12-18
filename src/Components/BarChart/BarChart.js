import React from "react";
import PropTypes from "prop-types";
import "./BarChart.scss";
import {getUserActivity} from "../../adapters/api";

import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



class BarChartGraph extends React.Component{
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>

            </div>
        );
    }

}

export default BarChartGraph;