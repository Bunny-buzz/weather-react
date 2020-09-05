import React from "react";

export default function Weather(props) {
  if (props.message) {
    return (
      <ul>
        <li> Weather Update in {props.message.name}: </li>
        <li>Temperature: {Math.round(props.message.main.temp)}ºC</li>
        <li>Feels like: {Math.round(props.message.main.feels_like)}ºC</li>
        <li>Humidity: {props.message.main.humidity}%</li>
        <li>Wind: {Math.round(props.message.wind.speed)}km/h</li>
        <li> Description: {props.message.weather[0].description}</li>
        <img
          src={`http://openweathermap.org/img/wn/${props.message.weather[0].icon}@2x.png`}
          alt="weather"
        />
      </ul>
    );
  } else {
    return (
      <span>
        {" "}
        ⛅ App <i class="wi wi-day-lightning"></i>{" "}
      </span>
    );
  }
}
