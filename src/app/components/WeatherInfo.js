import React, { useState, useEffect } from "react";
import miImagen from "./images/main.jpg";
import cloudImage from "./images/clouds.jpg";
import snowImage from "./images/snowy.jpg";
import clearImage from "./images/clear.jpg";
import windImage from "./images/windy.jpg";
import sunImage from "./images/sunny.jpg";
import rainImage from "./images/rainy.jpg";
import nieblaImage from "./images/niebla.jpg";

const WeatherInfo = (props) => {
  const [backgroundImage, setBackgroundImage] = useState(miImagen);

  useEffect(() => {
    // Cambiar la imagen de fondo según el tipo de clima
    switch (props.day) {
      case "Sun":
        setBackgroundImage(sunImage);
        break;
      case "Rain":
        setBackgroundImage(rainImage);
        break;
      case "Clouds":
        setBackgroundImage(cloudImage);
        break;
      case "Snow":
        setBackgroundImage(snowImage);
        break;
      case "Wind":
        setBackgroundImage(windImage);
        break;
      case "Clear":
        setBackgroundImage(clearImage);
        break;
      case "Haze":
        setBackgroundImage(nieblaImage);
        break;
      default:
        setBackgroundImage(miImagen);
        break;
    }
  }, [props.day]);

  return (
    <div>
      {props.error && (
        <div className="alert alert-danger">
          <p> {props.error}</p>
        </div>
      )}

      <div className="image-container">
        <img
          src={backgroundImage}
          alt="Clima"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      {props.temperature ? (
        <div className="card card-body">
          <p>
            {" "}
            Ubicación: {props.city}, {props.country}
          </p>
          <p> Temperatura: {props.temperature}°C</p>
          <p> Clima: {props.day}</p>
          <p> Descripción: {props.description}</p>
          <p> Humedad: {props.humidity}</p>
          <p> Velocidad del viento: {props.wind_speed}</p>

          <table className="table">
            <caption>Predicción del clima para las próximas 10 horas</caption>
            <thead>
              <tr>
                <th>Horas</th>
                <th>Temperatura (°C)</th>
                <th>Clima Principal</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              {props.hourlyForecast.map((hour, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{hour.temperature}</td>
                  <td>{hour.main}</td>
                  <td>{hour.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="card card-body">
        
        </div>
      )}
    </div>
  );
};

export default WeatherInfo;
