import React, { useEffect, useState } from "react";

const stations = {
  Stockholm: "98210",
  Kiruna: "180940",
  Sturup: "53300",
};

const WeatherTable = ({ sortBy, place }) => {
  const stationId = stations[place];
  let weatherUrl;
  const [weatherData, setWeatherData] = useState([]);

  if (stationId) {
    weatherUrl = `https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/${stationId}/period/latest-months/data.json`;

    if (sortBy === "temperature") {
      sort(weatherData, "value", "asc");
    } else {
      sort(weatherData, "date", "desc");
    }
  }

  useEffect(() => {
    if (weatherUrl) {
      fetch(weatherUrl)
        .then((res) => res.json())
        .then((data) => setWeatherData(data.value));
    }
  }, [ weatherUrl ]);

  if (!stationId) {
    return <p><strong>Stationen hittades inte</strong></p>;
  } else {
    return (
      <table>
        <thead>
          <tr>
            <th>Temperatur</th>
            <th>Datum</th>
          </tr>
        </thead>
        <tbody>
          {weatherData.map((dataPoint) => (
            <tr key={dataPoint.date}>
              <td>{dataPoint.value}</td>
              <td>{new Date(dataPoint.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
};

const sort = (weatherData, sortBy, sortOrder) => {
  weatherData.sort((a, b) => {
    if (a[sortBy] > b[sortBy]) {
      return sortOrder === "asc" ? 1 : -1;
    }

    if (a[sortBy] < b[sortBy]) {
      return sortOrder === "asc" ? -1 : 1;
    }

    return 0;
  });
};

export default WeatherTable;
