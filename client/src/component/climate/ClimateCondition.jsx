import React, { useEffect, useState } from 'react';
import CameronHighlands from "../../image/weather/CameronHighlands.jpg"
import axios from "axios";

// Air Quality
import CO from "../../image/weather/CO.png"
import O3 from "../../image/weather/O3.png"
import NO2 from "../../image/weather/NO2.jpg"
import SO2 from "../../image/weather/SO2.png"


// Highlight
import Sunrise from "../../image/weather/Sunrise.png"
import Sunset from "../../image/weather/Sunset.png"
import Humidity from "../../image/weather/Humidity.png"
import Pressure from "../../image/weather/Pressure.png"
import UV from "../../image/weather/UV.png"
import WindSpeed from "../../image/weather/WindSpeed.png"
import AirQuality from "../../image/weather/AirQuality.png"

const ClimateCondition = () => {


    const [weatherData, setWeatherData] = useState();
    const [forecastWeatherData, setForecastWeatherData] = useState();
    const [currentDate, setCurrentDate] = useState('');

    const getWeatherData = () => {
        axios
            .get(
                "http://localhost:5000/api/v1/currentWeather"
            )
            .then((response) => {
                setWeatherData(response.data);
            })
            .catch((error) => {
                console.log(error);
                // You can add additional error handling here, such as setting a default weather data value
            });
    };

    const getForecastWeather = () => {
        axios
            .get(
                "http://localhost:5000/api/v1/forecastWeather"
            )
            .then((response) => {
                setForecastWeatherData(response.data);
                console.log(setForecastWeatherData);
                console.log(response.data.forecast.forecastday[0].astro.sunrise);
            })
            .catch((error) => {
                console.log(error);
                // You can add additional error handling here, such as setting a default weather data value
            });
    }


    useEffect(() => {
        const intervalId = setInterval(() => {
            const date = new Date();
            const formattedDate = date.toLocaleString();
            setCurrentDate(formattedDate);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);


    useEffect(() => {
        getWeatherData();
        getForecastWeather();
    }, []);


    function getUVIndexColor(uvIndex) {
        if (uvIndex < 3) {
            return "green"; // Low UV index
        } else if (uvIndex < 6) {
            return "yellow"; // Moderate UV index
        } else if (uvIndex < 8) {
            return "orange"; // High UV index
        } else {
            return "red"; // Very high UV index
        }
    }


    return (
        <div className="box is-shadowless" style={{ padding: 0, margin: 0 }}>
            <div className="columns p-3">
                <div
                    className="column is-one-third p-6"
                    style={{
                        background: 'whitesmoke',
                        borderRadius: '8px 0 0 8px',
                        borderTop: '1px solid #ccc',
                        borderLeft: '1px solid #ccc',
                        borderBottom: '1px solid #ccc',
                    }}
                >
                    <div style={{ position: 'relative' }}>
                        <img
                            style={{ borderRadius: '15px' }}
                            src={CameronHighlands}
                            alt="CameronHighlands"
                        />
                        {weatherData && weatherData.location && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '50%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    textAlign: 'center',
                                    color: 'white',
                                    fontSize: '1.5rem',
                                    fontWeight: 'bold',
                                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                                }}
                            >
                                {weatherData.location.name},MY
                            </div>
                        )}
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'left',
                            marginLeft: "2vw",
                            marginTop: "2vh"
                        }}>
                        {weatherData && weatherData.current && (
                            <img
                                style={{ height: '100px', width: '100px', marginTop: "2vh" }}
                                src={weatherData.current.condition.icon}
                                alt="weather-icon"
                            />
                        )}
                    </div>

                    <div style={{ textAlign: 'right', marginRight: "2vw", marginBottom: "2vh" }}>
                        {weatherData && weatherData.current && (
                            <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>
                                {weatherData.current.temp_c}°C
                            </h1>
                        )}
                    </div>
                    <div>
                        <h1 style={{ fontSize: "20px" }} >
                            {currentDate}
                        </h1>
                    </div>

                    <hr style={{ borderTop: '1px solid #ccc', margin: '1rem 0' }} />

                    <div style={{ textAlign: 'left', marginRight: "2vw" }}>

                        {weatherData && weatherData.current && (
                            <h1 className="text is-bold" style={{ fontSize: "20px" }} >
                                {weatherData.current.condition.text}
                            </h1>
                        )}

                        {weatherData && weatherData.current && (
                            <h1 className="text" style={{ fontSize: "15px" }} >
                                Cloud Cover {weatherData.current.cloud}%
                            </h1>
                        )}


                    </div>

                    <br />


                </div>
                <div
                    className="column pt-5"
                    style={{
                        background: '#E1F6F0',
                        borderRadius: '0 8px 8px 0',
                        borderTop: '1px solid #ccc',
                        borderRight: '1px solid #ccc',
                        borderBottom: '1px solid #ccc',
                    }}
                >
                    <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Air Quality</h1>
                    <div className="columns p-3">
                        {weatherData && weatherData.current && (
                            <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                                <p >Carbon Monoxide</p>
                                <img
                                    style={{ height: "55px", marginRight: "1vw", marginTop: "2vh" }}
                                    src={CO}
                                    alt="co"
                                />
                                <p>{weatherData.current.air_quality.co.toFixed(2)} μg/m3</p>
                            </div>
                        )}

                        {weatherData && weatherData.current && (
                            <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                                <p>Ozone</p>
                                <img
                                    style={{ height: "55px", marginRight: "1vw", marginTop: "2vh" }}
                                    src={O3}
                                    alt="o3"
                                />
                                <p>{weatherData.current.air_quality.o3.toFixed(2)} μg/m3</p>
                            </div>
                        )}

                        {weatherData && weatherData.current && (
                            <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                                <p>Nitrogen Dioxide</p>
                                <img
                                    style={{ height: "55px", marginRight: "1vw", marginTop: "2vh" }}
                                    src={NO2}
                                    alt="no2"
                                />
                                <p>{weatherData.current.air_quality.no2.toFixed(2)} μg/m3</p>
                            </div>
                        )}

                        {weatherData && weatherData.current && (
                            <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                                <p>Sulphur Dioxide</p>
                                <img
                                    style={{ height: "55px", marginRight: "1vw", marginTop: "2vh" }}
                                    src={SO2}
                                    alt="so2"
                                />
                                <p>{weatherData.current.air_quality.so2.toFixed(2)} μg/m3</p>
                            </div>
                        )}
                    </div>

                    <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Today Highlights</h1>
                    <div className="columns p-3">
                        {weatherData && weatherData.current && (
                            <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem', alignItems: 'center' }}>
                                <p>UV</p>
                                <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <img
                                        style={{ height: "64px", marginRight: "1vw", marginTop: "2vh" }}
                                        src={UV}
                                        alt="uv"
                                    />
                                    <span style={{ fontSize: "30px", fontWeight: "bold" }}>{weatherData.current.uv}</span>
                                    <div style={{ width: "20px", height: "10px", marginLeft: "1vw", backgroundColor: getUVIndexColor(weatherData.current.uv), borderRadius: "5px" }}></div>
                                </div>
                            </div>
                        )}

                        {weatherData && weatherData.current && (
                            <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem', alignItems: 'center' }}>
                                <p>Pressure</p>
                                <p style={{ fontSize: "15px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <img
                                        style={{ height: "64px", marginRight: "1vw", marginTop: "2vh" }}
                                        src={WindSpeed}
                                        alt="windspeed"
                                    />
                                    <span>
                                        <p>{weatherData.current.wind_mph} mph</p>
                                        <p>{weatherData.current.wind_degree} °</p>
                                        <p>{weatherData.current.wind_dir}</p>
                                    </span>
                                </p>
                            </div>
                        )}



                        {weatherData && weatherData.current && (
                            <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem', alignItems: 'center' }}>
                                <p>Pressure</p>
                                <p style={{ fontSize: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <img
                                        style={{ height: "64px", marginRight: "1vw", marginTop: "2vh" }}
                                        src={Pressure}
                                        alt="pressure"
                                    />
                                    <span>{weatherData.current.precip_mm} mm</span>
                                </p>
                            </div>
                        )}

                    </div>
                    <div className="columns p-3">
                        {weatherData && weatherData.current && (
                            <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem', alignItems: 'center' }}>
                                <p>Humidity</p>
                                <p style={{ fontSize: "30px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <img
                                        style={{ height: "64px", marginRight: "1vw", marginTop: "2vh" }}
                                        src={Humidity}
                                        alt="humidity"
                                    />
                                    <span>{weatherData.current.humidity} %</span>
                                </p>
                            </div>
                        )}
                        {forecastWeatherData && forecastWeatherData.forecast && (
                            <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                                <p>Sunrise and Sunset</p>
                                <p style={{ fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <img
                                        style={{ height: "40px", marginRight: "2vw", marginTop: "2vh" }}
                                        src={Sunrise}
                                        alt="sunrise"
                                    />
                                    {forecastWeatherData.forecast.forecastday[0].astro.sunrise}
                                </p>
                                <p style={{ fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <img
                                        style={{ height: "40px", marginRight: "2vw" }}
                                        src={Sunset}
                                        alt="sunset"
                                    />
                                    {forecastWeatherData.forecast.forecastday[0].astro.sunset}
                                </p>
                            </div>
                        )}
                        {weatherData && weatherData.current && (
                            <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem', alignItems: 'center' }}>
                                <p>Humidity</p>
                                <p style={{ fontSize: "20px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                    <img
                                        style={{ height: "64px", marginRight: "1vw", marginTop: "2vh" }}
                                        src={AirQuality}
                                        alt="air quality"
                                    />
                                    <span>
                                        <p>
                                            {weatherData.current.air_quality['us-epa-index']}
                                        </p>
                                        <p>
                                            {(() => {
                                                switch (weatherData.current.air_quality['us-epa-index']) {
                                                    case 1:
                                                        return 'Good';
                                                    case 2:
                                                        return 'Moderate';
                                                    case 3:
                                                        return 'Unhealthy for sensitive group';
                                                    case 4:
                                                        return 'Unhealthy';
                                                    case 5:
                                                        return 'Very Unhealthy';
                                                    case 6:
                                                        return 'Hazardous';
                                                    default:
                                                        return '';
                                                }
                                            })()}
                                        </p>
                                    </span>
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClimateCondition;
