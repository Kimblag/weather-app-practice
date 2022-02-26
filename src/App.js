import React, { useState } from "react";
import "./App.css";
import Cards from "./components/cards/Cards.jsx";
import SearchBar from "./components/searchbar/SearchBar";
// import data from "./data.js";

const API_KEY = process.env.REACT_APP_API_KEY

function App() {
  const [cities, setCities] = useState([]);

  const handleAddCity = (city) => {
    setCities((prevCities) => {
      return [city, ...prevCities];
    });
  };

  const handleRemoveCity = (cityId) => {
    setCities((prevCities) => {
      return prevCities.filter((city) => {
        return cityId !== city.id
      });
    });
  };

  const onSearch = (city) => {
    fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    )
      .then((response) => response.json())
      .then((json) => {
        if (json.main !== undefined) {
          const city = {
            min: Math.round(json.main.temp_min),
            max: Math.round(json.main.temp_max),
            img: json.weather[0].icon,
            id: json.id,
            wind: json.wind.speed,
            temp: json.main.temp,
            name: json.name,
            weather: json.weather[0].main,
            clouds: json.clouds.all,
            latitud: json.coord.lat,
            longitud: json.coord.lon,
          };
          handleAddCity(city);
        } else {
          alert("City not found");
        }
      });
  };

  return (
    <div className="App">
      <SearchBar onSearch={onSearch} />
      <Cards cities={cities} onRemove={handleRemoveCity} />
    </div>
  );
}

export default App;
