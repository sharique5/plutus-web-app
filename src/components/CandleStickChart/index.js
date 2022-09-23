import { useEffect, useState } from 'react';
// import { getHistoricalPrices} from "yahoo-stock-prices-fetch";
import * as yahoo from "yahoo-stock-prices";
import GridLoader from "react-spinners/GridLoader";

import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var dataPoints = [];

export const CandleStickChart = ({ selectedStock }) => {

    const [isLoading, setIsLoading] = useState(false);

    const options = {
        exportEnabled: true,
        title: {
            text: ""
        },
        // axisX: {
        //     valueFormatString: "D MMM"
        // },
        axisY: {
            title: "Price",
            prefix: ""
        },
        data: [{
            type: "candlestick",
            name: "Stock Pattern",
            showInLegend: true,
            yValueFormatString: "##0.00",
            dataPoints: dataPoints
        }]
    }

    const getDateXDaysAgo = (numOfDays, date = new Date()) => {
        const daysAgo = new Date(date.getTime());
        daysAgo.setDate(date.getDate() - numOfDays);
        return daysAgo;
    }

    const fetchHistoricalData = async (code) => {
        setIsLoading(true);
        const startDate = getDateXDaysAgo(60);
        const endDate = new Date();
        const prices = await yahoo.getHistoricalPrices(startDate.getMonth(), startDate.getDate(), startDate.getFullYear(), endDate.getMonth(), endDate.getDate(), endDate.getFullYear(), code+".NS", "1d");
        dataPoints = prices.map(price => {
            return {
                x: price.date,
                y: [price.open, price.close, price.high, price.low]
            }
        });
        setIsLoading(false);    

    }

    useEffect(() => {
        // this.chart.render();
        if (selectedStock && selectedStock.code) {
            fetchHistoricalData(selectedStock.code);
        }
    }, [selectedStock]);

    if (isLoading || !selectedStock) {
        return <GridLoader />
    }
    return (
        <div>
			<CanvasJSChart options = {options}
				//  onRef={ref => this.chart = ref}
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
    )
} 