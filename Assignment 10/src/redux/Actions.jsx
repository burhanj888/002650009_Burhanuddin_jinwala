import { toast } from "react-toastify";
import { GET_WEATHER } from "./Constants";
import axios from "axios";
import { BASE_URL, FORECAST_URL, HOURLY_URL } from "../components/ApiConstants";



export const GetWeatherDetails = (location = "Boston") => async dispatch => {
  dispatch({ type: GET_WEATHER.PENDING });
  const weatherToday = axios.get(BASE_URL, {
      params: {
        q: location,
        units: "metric",
        lang: "en"
      }
    })
    const weatherForecast = axios.get(FORECAST_URL, {
      params: {
        q: location,
        units: "metric",
        lang: "en"
      }
    })
    const hourlyForecast = axios.get(HOURLY_URL, {
      params: {
        q: location,
        units: "metric",
        lang: "en"
      }
    })
    axios.all([weatherToday, weatherForecast, hourlyForecast])
    .then(axios.spread((...responses) => {
      // console.log(responses[0].data);
      // console.log(responses[1].data);
      dispatch({ type: GET_WEATHER.SUCCESS, payload: responses[0].data });
      dispatch({ type: GET_WEATHER.FORECASTSUCCESS, payload: responses[1].data });
      dispatch({ type: GET_WEATHER.HOURLYSUCCESS, payload: responses[2].data });}
    )
    )
    .catch(err => {
      console.log(err.response, err);
      toast.error(err.response.data.message, {
        position: "bottom-center",
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false
      });
      dispatch({ type: GET_WEATHER.REJECTED, payload: err.response });
    });
};
