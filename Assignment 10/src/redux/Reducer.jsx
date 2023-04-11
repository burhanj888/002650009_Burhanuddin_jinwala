import { GET_WEATHER } from "./Constants";
const WeatherInitialState = {
  loading: false,
  error: false,
  success: false,
  forecastsuccess: false,
  data: {},
  forecastdata: {},
  hourlydata: {},
};

export const WeatherReducer = (state = WeatherInitialState, action) => {
  const { type } = action;
  switch (type) {
    case GET_WEATHER.PENDING:
      return {
        ...state,
        loading: true
      };
    case GET_WEATHER.SUCCESS:
      console.log(action.payload);
      return {
        ...state,
        loading: false,
        success: true,
        data: action.payload
      };
    case GET_WEATHER.FORECASTSUCCESS:
      console.log(action.payload);
    return {
      ...state,
      loading: false,
      forecastsuccess: true,
      forecastdata: action.payload
    };
    case GET_WEATHER.HOURLYSUCCESS:
      console.log(action.payload);
    return {
      ...state,
      loading: false,
      hourlysuccess: true,
      hourlydata: action.payload
    };
    case GET_WEATHER.REJECTED:
      return {
        ...state,
        error: true
      };
    default:
      return state;
  }
};
