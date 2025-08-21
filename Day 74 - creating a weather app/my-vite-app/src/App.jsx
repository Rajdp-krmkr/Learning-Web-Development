import React, { useState } from "react";
import ShowWeatherData from "./components/ShowWeatherData";

function App() {
  const [place, setplace] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoadingWeatherData, setIsLoadingWeatherData] = useState(false);

  const handleFindWeather = async (location) => {
    // Logic to find weather for the place
    setIsLoadingWeatherData(true);
    const response = await fetch(
      // `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.409996&hourly=temperature_2m`
      `https://api.open-meteo.com/v1/forecast?latitude=${location.lat}&longitude=${location.lon}&daily=sunrise,sunset,temperature_2m_max,temperature_2m_min&hourly=temperature_2m,relative_humidity_2m&current=wind_speed_10m,temperature_2m,precipitation,rain,showers,snowfall&timezone=auto`
    );
    const data = await response.json();
    setWeatherData(data);
    setIsLoadingWeatherData(false);
  };

  const handleFindLocation = async () => {
    // Logic to find location based on user input
    try {
      console.log(place);
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${place}&limit=5&format=jsonv2`
      );
      const data = await res.json();

      setSearchResults(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <div
        style={{
          borderRadius: "8px",
          backgroundColor: isLoadingWeatherData ? "#000" : "#f0f0f0",
          padding: "20px",
          width: "300px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
          <input
            type="text"
            placeholder="Search place..."
            name="search"
            value={place}
            onChange={(e) => setplace(e.target.value)}
          />
          <button
            onClick={() => {
              handleFindLocation();
            }}
          >
            Search
          </button>
        </div>
        <div
          style={{
            direction: "flex",
            flexDirection: "column",
            marginTop: "10px",
          }}
        >
          {searchResults.map((result, index) => {
            return (
              <button
                key={index}
                style={{
                  padding: "5px 5px",
                  border: "1px solid #000",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
                onClick={() => {
                  handleFindWeather(result);
                }}
              >
                {result.display_name}
              </button>
            );
          })}
        </div>
      </div>

      <ShowWeatherData
        weatherData={weatherData}
        isLoadingWeatherData={isLoadingWeatherData}
      />
    </div>
  );
}

export default App;
