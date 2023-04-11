import React, { useNavigate } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { GetWeatherDetails } from "../redux/Actions";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ToggleSwitch from "../toggle/toggleSwitch";

import moment from "moment";
import { Link, Navigate } from "react-router-dom";

class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      isToggled: false
    };
  }

  componentDidMount() {
    const { GetWeatherDetails } = this.props.action;
    GetWeatherDetails().then((res)=>{ 
   })
  }
  handleSubmit = e => {
    e.preventDefault();
    const { searchInput } = this.state;
    const { GetWeatherDetails } = this.props.action;
    if (searchInput) GetWeatherDetails(this.state.searchInput);
    this.setState({ searchInput: "", isToggled: false });
  };
  handleOnChange = e => {
    this.setState({
      searchInput: e.target.value,
      // isToggled: false
    });
  };
  render() {
    const { data, success } = this.props.weatherData;
    const { forecastdata, forecastsuccess } = this.props.weatherData;
    const { weather, sys, name, main } = data;
    const forecastDetails = forecastdata;
    const { hourlydata, hourlysuccess } = this.props.weatherData;
    var hourlyDetails = hourlydata;
    console.log(data);
    console.log(forecastdata);
    console.log(hourlyDetails.list);
    const now = new Date();
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const link = days[now.getDay()];
    //const link = (now.toISOString().split('T')[0]);
    const timestamp = now.getDate();
    console.log(now.getTime());
    const degree = '\u00b0';
    const tempC = 'C';
    const tempF = 'F'
    const { searchInput } = this.state;

    return (
      <>
        <div className="container">
          <div className="heading">Weather Forecast App <div className="helper-text">
          <ToggleSwitch isOn={this.state.isToggled} handleToggle={() => {
            this.setState({isToggled:!this.state.isToggled})
            if(!this.state.isToggled){
              main.temp = ((main.temp*9/5)+32);
              main.temp_min = ((main.temp_min*9/5)+32);
              main.temp_max = ((main.temp_max*9/5)+32);
              forecastDetails.list[6].main.temp = ((forecastDetails.list[6].main.temp*9/5)+32);
              forecastDetails.list[6].main.temp_min = ((forecastDetails.list[6].main.temp_min*9/5)+32);
              forecastDetails.list[6].main.temp_max = ((forecastDetails.list[6].main.temp_max*9/5)+32);
              forecastDetails.list[14].main.temp = ((forecastDetails.list[14].main.temp*9/5)+32);
              forecastDetails.list[14].main.temp_min = ((forecastDetails.list[14].main.temp_min*9/5)+32);
              forecastDetails.list[14].main.temp_max = ((forecastDetails.list[14].main.temp_max*9/5)+32);
              forecastDetails.list[22].main.temp = ((forecastDetails.list[22].main.temp*9/5)+32);
              forecastDetails.list[22].main.temp_min = ((forecastDetails.list[22].main.temp_min*9/5)+32);
              forecastDetails.list[22].main.temp_max = ((forecastDetails.list[22].main.temp_max*9/5)+32);
              forecastDetails.list[30].main.temp = ((forecastDetails.list[30].main.temp*9/5)+32);
              forecastDetails.list[30].main.temp_min = ((forecastDetails.list[30].main.temp_min*9/5)+32);
              forecastDetails.list[30].main.temp_max = ((forecastDetails.list[30].main.temp_max*9/5)+32);
              forecastDetails.list[38].main.temp = ((forecastDetails.list[38].main.temp*9/5)+32);
              forecastDetails.list[38].main.temp_min = ((forecastDetails.list[38].main.temp_min*9/5)+32);
              forecastDetails.list[38].main.temp_max = ((forecastDetails.list[38].main.temp_max*9/5)+32);
            }
            else if(this.state.isToggled)
            {
              main.temp = ((main.temp-32)*5/9);
              main.temp_min = ((main.temp_min-32)*5/9);
              main.temp_max = ((main.temp_max-32)*5/9);
              forecastDetails.list[6].main.temp = ((forecastDetails.list[6].main.temp-32)*5/9);
              forecastDetails.list[6].main.temp_min = ((forecastDetails.list[6].main.temp_min-32)*5/9);
              forecastDetails.list[6].main.temp_max = ((forecastDetails.list[6].main.temp_max-32)*5/9);
              forecastDetails.list[14].main.temp = ((forecastDetails.list[14].main.temp-32)*5/9);
              forecastDetails.list[14].main.temp_min = ((forecastDetails.list[14].main.temp_min-32)*5/9);
              forecastDetails.list[14].main.temp_max = ((forecastDetails.list[14].main.temp_max-32)*5/9);
              forecastDetails.list[22].main.temp = ((forecastDetails.list[22].main.temp-32)*5/9);
              forecastDetails.list[22].main.temp_min = ((forecastDetails.list[22].main.temp_min-32)*5/9);
              forecastDetails.list[22].main.temp_max = ((forecastDetails.list[22].main.temp_max-32)*5/9);
              forecastDetails.list[30].main.temp = ((forecastDetails.list[30].main.temp-32)*5/9);
              forecastDetails.list[30].main.temp_min = ((forecastDetails.list[30].main.temp_min-32)*5/9);
              forecastDetails.list[30].main.temp_max = ((forecastDetails.list[30].main.temp_max-32)*5/9);
              forecastDetails.list[38].main.temp = ((forecastDetails.list[38].main.temp-32)*5/9);
              forecastDetails.list[38].main.temp_min = ((forecastDetails.list[38].main.temp_min-32)*5/9);
              forecastDetails.list[38].main.temp_max = ((forecastDetails.list[38].main.temp_max-32)*5/9);
            }
            }} label="Temperature in" /></div></div>
          <form className="search-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              placeholder="Search Weather by City"
              value={searchInput}
              onChange={e => this.handleOnChange(e)}
            />
            <button>Find</button>
          </form>
          
          <div className="info">
            <div className="sub-heading">
              The Weather Now at
            </div><br/>
            {/* <small className="date">
              {success ? moment().format("MMM DD YYYY") : null}
            </small> */}
            <div className="location">
              {success ? name : null}
              {/* {forecastsuccess ? name : null} */}
              <small>({success ? sys.country : null})</small>
            </div>
            <Link to={link} className="linkToForecast" state = {{ hourly: hourlyDetails.list, isToggled: this.state.isToggled}}>
              <div className="forecast-info" title="Click to see today's forecast">
                  {success ? (
                    <img
                      src={`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
                      alt=""
                    />
                  ) : null}
                <div className="forecast-value">
                  <div className="degrees">
                    <span className="degrees-count">
                      {success ? Math.round(main.temp*10)/10 : null}
                    </span>
                    {this.state.isToggled?
                      (tempF):(tempC)
                    }
                  </div>
                </div>
              </div>
            </Link>
            <div className="additional-info">
              <ul className="list">
                <li>
                  <b>Min Temp</b> {success ? Math.round(main.temp_min*10)/10 : null} {this.state.isToggled?
                    (degree + tempF):(degree + tempC)
                  }
                </li>
                <li id="Max">
                  <b>Max Temp</b> {success ? Math.round(main.temp_max*10)/10 : null} {this.state.isToggled?
                    (degree + tempF):(degree + tempC)
                  }
                </li>
              </ul>
            </div>
          </div>
          <div style={{textAlign:'center', marginTop: '20px', width:'100%'}}>
            <div className="sub-heading">
              Weather forecast for the next 5 days
            </div>
            <div className="dailyForecast">
              <span className="forecastDate">{forecastsuccess ? ((forecastDetails.list[8].dt_txt.split(" ")[0])) : null}</span><br/>
              <div>
                { forecastsuccess ?
                  <img  src={`http://openweathermap.org/img/wn/${forecastDetails.list[38].weather[0].icon}@2x.png`} alt="">
                  </img> : null}
              </div>
              <b>Avg: </b>{forecastsuccess ? Math.round(forecastDetails.list[6].main.temp*10)/10 : null} {this.state.isToggled?
                (degree + tempF):(degree + tempC)
              }<br/>
              <b>Min: </b>{forecastsuccess ? Math.round(forecastDetails.list[6].main.temp_min*10)/10 : null} {this.state.isToggled?
                (degree + tempF):(degree + tempC)
              }<br/>
              <b>Max: </b>{forecastsuccess ? Math.round(forecastDetails.list[6].main.temp_max*10)/10 : null} {this.state.isToggled?
                (degree + tempF):(degree + tempC)
              }<br/>
            </div>
            <div className="dailyForecast">
              <span className="forecastDate">{forecastsuccess ? (forecastDetails.list[14].dt_txt.split(" ")[0]) : null}</span><br/>
              <div>
                { forecastsuccess ?
                  <img  src={`http://openweathermap.org/img/wn/${forecastDetails.list[38].weather[0].icon}@2x.png`} alt="">
                  </img> : null}
              </div>
              <b>Avg: </b>{forecastsuccess ? Math.round(forecastDetails.list[14].main.temp*10)/10 : null} {this.state.isToggled?
                (degree + tempF):(degree + tempC)
              }<br/>
              <b>Min: </b>{forecastsuccess ? Math.round(forecastDetails.list[14].main.temp_min*10)/10 : null} {this.state.isToggled?
                (degree + tempF):(degree + tempC)
              }<br/>
              <b>Max: </b>{forecastsuccess ? Math.round(forecastDetails.list[14].main.temp_max*10)/10 : null} {this.state.isToggled?
                (degree + tempF):(degree + tempC)
              }<br/>
            </div>
            <div className="dailyForecast">
              <span className="forecastDate">{forecastsuccess ? (forecastDetails.list[22].dt_txt.split(" ")[0]) : null}</span><br/>
              <div>
                { forecastsuccess ?
                  <img  src={`http://openweathermap.org/img/wn/${forecastDetails.list[38].weather[0].icon}@2x.png`} alt="">
                  </img> : null}
              </div>
              <b>Avg: </b>{forecastsuccess ? Math.round(forecastDetails.list[22].main.temp*10)/10 : null} {this.state.isToggled?
                (degree + tempF):(degree + tempC)
              }<br/>
              <b>Min: </b>{forecastsuccess ? Math.round(forecastDetails.list[22].main.temp_min*10)/10 : null} {this.state.isToggled?
                (degree + tempF):(degree + tempC)
              }<br/>
              <b>Max: </b>{forecastsuccess ? Math.round(forecastDetails.list[22].main.temp_max*10)/10 : null} {this.state.isToggled?
                (degree + tempF):(degree + tempC)
              }<br/>
            </div>
            <div className="dailyForecast">
              <span className="forecastDate">{forecastsuccess ? (forecastDetails.list[30].dt_txt.split(" ")[0]) : null}</span><br/>
              <div>
                { forecastsuccess ?
                  <img  src={`http://openweathermap.org/img/wn/${forecastDetails.list[38].weather[0].icon}@2x.png`} alt="">
                  </img> : null}
              </div>
              <b>Avg: </b>{forecastsuccess ? Math.round(forecastDetails.list[30].main.temp*10)/10 : null} {this.state.isToggled?
                (degree + tempF):(degree + tempC)
              }<br/>
              <b>Min: </b>{forecastsuccess ? Math.round(forecastDetails.list[30].main.temp_min*10)/10 : null} {this.state.isToggled?
                (degree + tempF):(degree + tempC)
              }<br/>
              <b>Max: </b>{forecastsuccess ? Math.round(forecastDetails.list[30].main.temp_max*10)/10 : null} {this.state.isToggled?
                (degree + tempF):(degree + tempC)
              }<br/>
            </div>
            <div className="dailyForecast">
              <span className="forecastDate">{forecastsuccess ? (forecastDetails.list[38].dt_txt.split(" ")[0]) : null}</span><br/>
              <div>
                { forecastsuccess ?
                  <img  src={`http://openweathermap.org/img/wn/${forecastDetails.list[38].weather[0].icon}@2x.png`} alt="">
                  </img> : null}
              </div>
              <b>Avg: </b>{forecastsuccess ? Math.round(forecastDetails.list[38].main.temp*10)/10 : null} {this.state.isToggled?
                (degree + tempF):(degree + tempC)
              }<br/>
              <b>Min: </b>{forecastsuccess ? Math.round(forecastDetails.list[38].main.temp_min*10)/10 : null} {this.state.isToggled?
                (degree + tempF):(degree + tempC)
              }<br/>
              <b>Max: </b>{forecastsuccess ? Math.round(forecastDetails.list[38].main.temp_max*10)/10 : null} {this.state.isToggled?
                (degree + tempF):(degree + tempC)
              }<br/>
            </div>
            </div>
        </div>
        <ToastContainer />
      </>
    );
  }
}

const mapStateToProps = state => ({
  weatherData: state
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators({ GetWeatherDetails }, dispatch)
});
export default connect(mapStateToProps, mapDispatchToProps)(Weather);
