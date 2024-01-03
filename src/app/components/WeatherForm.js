import React from "react";

const WeatherForm = (props) => (
  <div className="card card-body">
    <form onSubmit={props.getWeather}>
      <div className="form-group">
        <input
          type="text"
          name="city"
          id="city"
          className="form-control"
          placeholder="Buscar ciudad"
          aria-describedby="helpCity"
          autoFocus
        />
        <small id="helpCity" className="text-muted">
          Ingresa el nombre de la ciudad para buscar el clima.
        </small>
        <button className="btn btn-success btn-block" type="submit">
        Buscar clima
      </button>
      </div>

      
    </form>
  </div>
);

export default WeatherForm;
