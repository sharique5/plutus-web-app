import { useState } from 'react';
import { CandleStickChart } from '../CandleStickChart';
import { Header } from "../header"
import { PredictValue } from '../PredictValue';
import { StockSearch } from "../StockSearch";
import "./style.scss";

export const Home = () => {

    const [selectedStock, setSelectedStock] = useState("");

    return (
        <div class="home-container">
            <Header />
            {
                selectedStock && selectedStock.code ? (
                    <div class="body-container-details">
                        <div className='summary'>
                            <StockSearch selectedStock={selectedStock} setSelectedStock={setSelectedStock} />
                            <PredictValue selectedStock={selectedStock} />
                        </div>
                        <div className='chart'>
                            <CandleStickChart selectedStock={selectedStock} />
                        </div>
                    </div>
                ) : (
                    <div class="body-container">
                        <StockSearch selectedStock={selectedStock} setSelectedStock={setSelectedStock} />
                    </div>
                )
            }
        </div>
    )
}