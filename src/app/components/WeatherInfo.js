import React from "react";

const WeatherInfo = props=>{
    
    console.log(props)
    return(
        
        <div>
            {
            props.error&&
            <div className="alert alert-danger">
            <p> {props.error}</p>
            </div>
            
        }
        
        {
            props.temperature ? 

            <div className="card card-body"> 
                <p> Ubicación: {props.city}, {props.country}</p>
                <p> Temperatura: {props.temperature}°C</p>
                <p> Clima: {props.day}</p>
                <p> Descripción: {props.description}</p>
                <p> Humedad: {props.humidity}</p>
                <p> Velovidad del viento: {props.wind_speed}</p>

             
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
            :
        <div className="card card-body">
            <p>Aún no se ha hecho una solicitud</p>
         
        </div>
        }
        </div>

       
    )
}

export default WeatherInfo;