import { weatherForecasts } from "./WeatherForecaset/WeatherForecast.jsx";  
import './App.css';

const App = () => {
  
  return (
    <>
    <h1>Local Weather</h1>
    <section>
      <div className="weather">
        <h2>Day of the Week</h2>
        <img src="" alt="" />
        <p><span>conditions: </span>current weather conditions</p>
        <p><span>time: </span>time of day</p>
      </div>
    </section>
    </>
  );
}

export default App
