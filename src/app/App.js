import React, { Component } from "react";
import WeatherInfo from "./components/WeatherInfo";
import WeatherForm from "./components/WeatherForm";
import { WEATHER_KEY } from "./keys";

class App extends Component {
  state = {
    temperature: "",
    day: "",
    description: "",
    humidity: "",
    wind_speed: "",
    city: "",
    country: "",
    hourlyForecast: [],
    error: null,
  };

  extractHourlyData = (hourlyData) => {
    if (hourlyData) {
      return hourlyData.slice(0, 10).map((list) => ({
        temperature: list.main.temp,
        main: list.weather[0].main,
        description: list.weather[0].description,
      }));
    } else {
      return [];
    }
  };

  getWeather = async (e) => {
    e.preventDefault();
    const { city } = e.target.elements;
    const cityValue = city.value;

    if (cityValue) {
      const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${WEATHER_KEY}&lang=es&units=metric`;
      const response = await fetch(API_URL);
      const data = await response.json();

      const hourlyForecastURL = `http://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${WEATHER_KEY}&lang=es&units=metric`;
      const hourlyForecastResponse = await fetch(hourlyForecastURL);
      const hourlyForecastData = await hourlyForecastResponse.json();

      const extractedHourlyData = this.extractHourlyData(hourlyForecastData.list);

      if (response.ok) {
        this.setState({
          temperature: data.main.temp,
          day: data.weather[0].main,
          description: data.weather[0].description,
          humidity: data.main.humidity,
          wind_speed: data.wind.speed,
          city: data.name,
          country: data.sys.country,
          hourlyForecast: extractedHourlyData,
          error: null,
        });
      } else {
        this.setState({
          temperature: "",
          day: "",
          description: "",
          humidity: "",
          wind_speed: "",
          city: "",
          country: "",
          hourlyForecast: [],
          error: "No se encontró esta ubicación",
        });
      }
    } else {
      this.setState({
        temperature: "",
        day: "",
        description: "",
        humidity: "",
        wind_speed: "",
        city: "",
        country: "",
        hourlyForecast: [],
        error: "Por favor ingrese una ubicación",
      });
    }
  };

  requestLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          this.getWeatherByCoords(latitude, longitude);
        },
        (error) => {
          console.error("Error obteniendo ubicación:", error);
          // Puedes manejar el error aquí
        }
      );
    } else {
      console.error("La geolocalización no es compatible");
      // Puedes manejar la falta de soporte para geolocalización aquí
    }
  };

  getWeatherByCoords = async (latitude, longitude) => {
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_KEY}&lang=es&units=metric`;
    const response = await fetch(API_URL);
    const data = await response.json();

    const hourlyForecastURL = `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${WEATHER_KEY}&lang=es&units=metric`;
    const hourlyForecastResponse = await fetch(hourlyForecastURL);
    const hourlyForecastData = await hourlyForecastResponse.json();

    const extractedHourlyData = this.extractHourlyData(hourlyForecastData.list);

    if (response.ok) {
      this.setState({
        temperature: data.main.temp,
        day: data.weather[0].main,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
        city: data.name,
        country: data.sys.country,
        hourlyForecast: extractedHourlyData,
        error: null,
      });
    } else {
      this.setState({
        temperature: "",
        day: "",
        description: "",
        humidity: "",
        wind_speed: "",
        city: "",
        country: "",
        hourlyForecast: [],
        error: "No se encontró esta ubicación",
      });
    }
  };

  render() {
    return (
      <div className="container p-4">
        <div className="row">
          <div className="col-md-6 mx-auto">
            <WeatherForm
              getWeather={this.getWeather}
              requestLocation={this.requestLocation}
            />
            <WeatherInfo {...this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
