import React from "react";
import ReactDOM from "react-dom";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { HourlyForecast } from "./components/hourlyForecast";

import App from "./App";

const rootElement = document.getElementById("root");

ReactDOM.render(
    <BrowserRouter>
    {/* {Dates.map(Date => (<Link to={'forecast/' + Date} />)} */}
        <Routes>
            <Route path = "/" element = {<App />}/>
            <Route path = "/:dateval" element = {<HourlyForecast />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);
