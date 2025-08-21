import React from "react";

const ShowWeatherData = ({ weatherData, isLoadingWeatherData }) => {
  if (isLoadingWeatherData) {
    return <div>Loading weather data...</div>;
  }

  if (!weatherData) {
    return <div>No weather data available</div>;
  }
  return (
    <div style={{}}>
      <p>
        temperature: {weatherData?.current?.temperature_2m}
        °C
      </p>
      <p>wind speed: {weatherData?.current?.wind_speed_10m}</p>
      <p>precipitation: {weatherData?.current?.precipitation}</p>
      <p>rain: {weatherData?.current?.rain}</p>
      <p>showers: {weatherData?.current?.showers}</p>
      <p>snowfall: {weatherData?.current?.snowfall}</p>
      <p>time: {weatherData?.current?.time}</p>
      <p>Sunrise: {weatherData?.daily?.sunrise[0]}</p>
      <p>Sunset: {weatherData?.daily?.sunset[0]}</p>
      <p>Timezone: {weatherData?.timezone}</p>
    </div>
  );
};

export default ShowWeatherData;
