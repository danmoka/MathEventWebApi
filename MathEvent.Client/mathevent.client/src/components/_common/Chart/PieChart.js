import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import Paper from '@material-ui/core/Paper';
import {
    Chart,
    Legend,
    PieSeries,
    Title
} from '@devexpress/dx-react-chart-material-ui';
import { Palette } from '@devexpress/dx-react-chart';
import schemeCollection from "../../../constants/chart-color-scheme";

const PieChart = ({ data, valueField, argumentField, title, elevation=1 }) => {
    const dispatch = useDispatch();
    const { isDarkTheme } = useSelector(state => state.app);
    const [scheme, setScheme] = useState(schemeCollection.schemeCategory10);

    useEffect(() => {
        if (isDarkTheme) {
            setScheme(schemeCollection.schemeDark2);
        }
        else {
            setScheme(schemeCollection.schemeCategory10);
        }
    }, [dispatch, isDarkTheme]);

    return (
        <Paper
            elevation={elevation}>
            <Chart
                data={data}
            >
                <Palette scheme={scheme} />
                <PieSeries
                    valueField={valueField}
                    argumentField={argumentField}
                    innerRadius={0.6}
                />
                <Legend />
                <Title
                    text={title}
                />
            </Chart>
        </Paper>
    );
};

export default PieChart;