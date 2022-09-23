import { useEffect, useState } from "react"
import * as yahoo from "yahoo-stock-prices";
import ClipLoader from "react-spinners/ClipLoader";


export const PredictValue = ({ selectedStock }) => {
    const [prectedValue, setPredictedValue] = useState(0);
    const [isPositive, setIsPositive] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (selectedStock && selectedStock.code) {
            calculateNewValue();
        }
    }, [selectedStock]);

    const getCurrentValue = async () => {
        const val = await yahoo.getCurrentPrice(selectedStock.code+".NS");
        return val;
    };

    const calculateNewValue = async () => {
        setIsLoading(true);
        const change = parseInt(Math.random() * 30, 10);
        const trend = parseInt(Math.random() * 2, 10) % 2;
        const current = await getCurrentValue();
        let newVal = 0;
        if (trend) {
            // increment
            newVal = ((100 + change) * current) / 100; 
        } else {
            newVal = ((100 - change) * current) / 100;
        }
        setIsPositive(trend);
        setPredictedValue(newVal);
        setIsLoading(false);
    }

    if (isLoading) {
        return <ClipLoader />
    }
    return (
        <div className="predicted-value-container">
            As per our calculation, the current predicted value is 
            <span className={isPositive ? "green" : "red"}>{prectedValue.toFixed(2)}</span>.
        </div>
    )
}