import React, { useState, useEffect } from 'react';
import './../Styles/Weather.css';

const api = {
    key: "9f1a11002cbd3ec9607448c8296c54d2",
    base: "https://api.openweathermap.org/data/2.5/",
};

function WeatherComponent(props) {
    const defaultLocation = props.state;
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetch(`${api.base}weather?q=${defaultLocation}&units=metric&APPID=${api.key}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Weather data not found for the default location.');
                }
                return response.json();
            })
            .then((data) => {
                setWeatherData(data);
                setErrorMessage(null);
            })
            .catch((error) => {
                setWeatherData(null);
                setErrorMessage(error.message);
            });
        fetch(`${api.base}forecast?q=${defaultLocation}&units=metric&cnt=16&APPID=${api.key}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Forecast data not found for the default location.');
                }
                return response.json();
            })
            .then((data) => {
                setForecastData(data);
            })
            .catch((error) => {
                setForecastData(null);
            });
    }, []);

    const dateBuilder = (d) => {
        const hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
        const minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
        return `${hours}:${minutes}`;
    };

    const generateWeatherSummary = (forecastData) => {
        const conditions = forecastData.map((data) => data.weather[0].main.toLowerCase());

        if (conditions.includes('rain')) {
            return 'Expect some rain in the next 15 days.';
        } else if (conditions.includes('clouds')) {
            return 'Cloudy skies are expected in the next 15 days.';
        } else if (conditions.includes('clear')) {
            return 'Clear skies are expected in the next 15 days.';
        } else {
            return 'Weather conditions may vary in the next 15 days.';
        }
    };

    const renderWeatherCard = () => {
        if (weatherData && forecastData) {
            const now = new Date();
            const { name } = weatherData;
            const { temp } = weatherData.main;
            const summary = generateWeatherSummary(forecastData.list.slice(0, 15));

            return (
                <div className="weather-card">
                    <div className="container">
                        <div className="cloud front">
                            <span className="left-front"></span>
                            <span className="right-front"></span>
                        </div>
                        <span className="sunshine"></span>
                        <span className="sun floating"></span>
                        <div className="cloud back">
                            <span className="left-back"></span>
                            <span className="right-back floatingLR"></span>
                        </div>
                    </div>

                    <div className="card-header">
                        <span>{name},{dateBuilder(now)}</span>
                
                    </div>

                    <span className="temp">{Math.round(temp)}°C</span>

                    <div className="temp-scale">
                        <span>Celsius</span>
                    </div>

                    <div className="forecast">
                        <h2>Weather Summary for Next 15 Days:</h2>
                        <p>{summary}</p>
                    </div>
                </div>
            );
        } else if (errorMessage) {
            return (
                <div className="error-message">{errorMessage}</div>
            );
        } else {
            return null;
        }
    };

    return (
        <div className="weather-app">
            {renderWeatherCard()}
        </div>
    );
}

export default WeatherComponent;
