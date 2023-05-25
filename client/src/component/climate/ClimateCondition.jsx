import React, { useEffect, useState } from 'react';
import CameronHighlands from "../../image/weather/CameronHighlands.jpg"
import axios from "axios";



const ClimateCondition = () => {


    const [weatherData, setWeatherData] = useState();
    const [currentDate, setCurrentDate] = useState('');

    const getWeatherData = () => {
        axios
            .get(
                "http://localhost:5000/api/v1/currentWeather"
            )
            .then((response) => {
                setWeatherData(response.data);
                console.log(response);
            })
            .catch((error) => {
                console.log(error);            
                // You can add additional error handling here, such as setting a default weather data value
            });
    };



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
    }, []);

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
                                <p className="is-underlined">Carbon Monoxide</p>
                                <p>{weatherData.current.air_quality.co.toFixed(2)} μg/m3</p>
                            </div>
                        )}

                        {weatherData && weatherData.current && (
                            <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                                <p className="is-underlined">Ozone</p>
                                <p>{weatherData.current.air_quality.o3.toFixed(2)} μg/m3</p>
                            </div>
                        )}

                        {weatherData && weatherData.current && (
                            <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                                <p className="is-underlined">Nitrogen dioxide</p>
                                <p>{weatherData.current.air_quality.no2.toFixed(2)} μg/m3</p>
                            </div>
                        )}

                        {weatherData && weatherData.current && (
                            <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                                <p className="is-underlined">Sulphur dioxide</p>
                                <p>{weatherData.current.air_quality.so2.toFixed(2)} μg/m3</p>
                            </div>
                        )}
                    </div>

                    <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Today Highlights</h1>
                    <div className="columns p-3">
                        {weatherData && weatherData.current && (
                            <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                                <p>UV Index</p>
                                <p>{weatherData.current.uv}</p>
                            </div>
                        )}
                        {weatherData && weatherData.current && (
                            <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                                <p>Wind Status</p>
                                <p>{weatherData.current.wind_mph} Miles Per Hour</p>
                                <p>{weatherData.current.wind_degree}</p>
                                <p>{weatherData.current.wind_dir}</p>
                            </div>
                        )}
                        {weatherData && weatherData.current && (
                            <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                                <p>Pressure</p>
                                <p>{weatherData.current.pressure_mb} millibars</p>
                            </div>
                        )}
                    </div>
                    <div className="columns p-3">
                        {weatherData && weatherData.current && (
                            <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                                <p>Humidity</p>
                                <p>{weatherData.current.humidity}</p>
                            </div>
                        )}
                        {weatherData && weatherData.current && (
                            <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                                <p>Wind Gust</p>
                                <p>{weatherData.current.gust_mph} Miles Per Hour</p>
                            </div>
                        )}
                        {weatherData && weatherData.current && (
                            <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                                <p>Air Quality</p>
                                <p>{weatherData.current.air_quality['us-epa-index']}</p>
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
                            </div>
                        )}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClimateCondition;
