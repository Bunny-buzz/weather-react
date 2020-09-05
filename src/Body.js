import React from "react";

export default function Body(props) {
  return (
    <div className="container">
      <div className="app">
        <div className="weather-body">
          <form id="search-box">
            <input
              type="City"
              placeholder="Type in your City...."
              id="search-text-input"
            />
            <input type="submit" value="Search" id="search-button" />
            <a href="javascript:void(0)" id="current-location">
              <i class="fas fa-map-marker-alt"> </i>
            </a>
          </form>
          <h1 id="city"></h1>
          <div className="weather-top">
            <div className="row">
              <div className="col-sm-6">
                <h2>
                  <ul>
                    <li id="timepiece"></li>
                    <li id="description"></li>
                    <li>
                      Wind: <span id="wind"></span>Km/h
                    </li>
                    <li>
                      Humidity: <span id="humidity"></span>%
                    </li>
                    <li>
                      Feels like: <span id="feels"></span>
                    </li>
                  </ul>
                </h2>
              </div>
              <div className="col-sm-6" id="degrees">
                <div className="clearfix weather-temperature">
                  <img src="" alt="Clear" id="image" className="float-left" />
                  <div className="float-left">
                    <h3>
                      <strong
                        className="weather-figure"
                        id="temperature"
                      ></strong>
                    </h3>
                    <div className="units">
                      <span className="float-right">
                        <a href="#" id="celsius" className="active">
                          °C
                        </a>{" "}
                        |
                        <a href="#" id="fahrenheit">
                          °F
                        </a>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-4"></div>
            </div>
            <div className="col-sm-8"></div>
            <div className="row weather-bottom" id="forecast"></div>
          </div>
          <small className="checker">
            <a href="https://weather.com/en-CA/weather/today/l/CAON4756:1:CA">
              Weather Checker
            </a>
          </small>
        </div>
      </div>
    </div>
  );
}
