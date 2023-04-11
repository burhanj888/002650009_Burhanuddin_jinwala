import React from "react";
import "./styles.css";
import Weather from "./components/Weather";
import { Provider } from "react-redux";
import WeatherStore from "./redux/Store";
import ToggleSwitch from "./toggle/toggleSwitch";
import { Route } from "react-router-dom";
import { hourlyForecast } from "./components/hourlyForecast";


const App = () => {
  return (
    <Provider store={WeatherStore}>
      <div className="App">
        <Weather />
      </div>
    </Provider>
    
  );
};

export default App;
