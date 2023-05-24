import React, {useEffect, useState} from 'react';
import weather from "../../image/weather/weather.png";
import CameronHighlands from "../../image/weather/CameronHighlands.jpg"
import sun  from "../../image/weather/sun.png"
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
                        background: 'white',
                        borderRadius: '8px 0 0 8px',
                        borderTop:'1px solid #ccc',
                        borderLeft:'1px solid #ccc',
                        borderBottom:'1px solid #ccc',
                    }}
                >
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'left',
                            marginLeft:"2vw",
                            marginTop:"2vh"
                    }}>
                        <img style={{ height: "auto", maxWidth: "80%" }} src={weather} alt="weather" />
                    </div>
                    <div style={{ textAlign: 'right', marginRight:"2vw"}}>
                        {weatherData && weatherData.current && (
                            <h1 style={{fontSize:"60px",fontWeight:"bold"}}>
                                {weatherData.current.temp_c}°C
                            </h1>
                        )}

                        <h1 style={{fontSize:"20px"}} >
                            {currentDate}
                        </h1>

                    </div>

                    <hr style={{ borderTop: '1px solid #ccc', margin: '1rem 0' }} />

                    <div style={{ textAlign: 'left', marginRight:"2vw"}}>

                        {weatherData && weatherData.current && (
                            <h1 className="text is-bold" style={{fontSize:"20px"}} >
                                {weatherData.current.condition.text}
                            </h1>
                        )}

                        {weatherData && weatherData.current && (
                            <h1 className="text" style={{fontSize:"15px"}} >
                                Cloud Cover {weatherData.current.cloud}%
                            </h1>
                        )}


                    </div>

                    <br/>

                    <div style={{ position: 'relative' }}>
                        <img
                            style={{borderRadius: '15px' }}
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
                                {weatherData.location.name}, {weatherData.location.region}
                            </div>
                        )}
                    </div>
                </div>
                <div
                    className="column pt-5"
                    style={{
                        background: '#E1F6F0',
                        borderRadius: '0 8px 8px 0',
                        borderTop:'1px solid #ccc',
                        borderRight:'1px solid #ccc',
                        borderBottom:'1px solid #ccc',
                    }}
                >
                    <h1>Week</h1>
                    <div className="columns p-3">
                        <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                            <p>Monday</p>
                            <img style={{ marginTop:"2vh",height: "auto", maxWidth: "4vw" }} src={sun} alt="sun" />
                            <p>26 °C</p>
                        </div>
                        <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                            <p>Tuesday</p>
                            <img style={{ marginTop:"2vh",height: "auto", maxWidth: "4vw" }} src={sun} alt="sun" />
                            <p>26 °C</p>
                        </div>
                        <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                            <p>Wednesday</p>
                            <img style={{ marginTop:"2vh",height: "auto", maxWidth: "4vw" }} src={sun} alt="sun" />
                            <p>26 °C</p>
                        </div>
                        <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                            <p>Thursday</p>
                            <img style={{ marginTop:"2vh",height: "auto", maxWidth: "4vw" }} src={sun} alt="sun" />
                            <p>26 °C</p>
                        </div>
                        <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center',margin: '0.3rem' }}>
                            <p>Friday</p>
                            <img style={{ marginTop:"2vh",height: "auto", maxWidth: "4vw" }} src={sun} alt="sun" />
                            <p>26 °C</p>
                        </div>
                        <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                            <p>Saturday</p>
                            <img style={{ marginTop:"2vh",height: "auto", maxWidth: "4vw" }} src={sun} alt="sun" />
                            <p>26 °C</p>
                        </div>
                        <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                            <p>Sunday</p>
                            <img style={{ marginTop:"2vh",height: "auto", maxWidth: "4vw" }} src={sun} alt="sun" />
                            <p>26 °C</p>
                        </div>
                    </div>

                    <h1>Today Highlights</h1>
                    <div className="columns p-3">
                        <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                            <p>UV Index</p>
                            <img style={{ marginTop:"2vh",height: "auto", maxWidth: "4vw" }} src={sun} alt="sun" />
                            <p>123</p>
                        </div>
                        <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                            <p>Wind Status</p>
                            <img style={{ marginTop:"2vh",height: "auto", maxWidth: "4vw" }} src={sun} alt="sun" />
                            <p>26 °C</p>
                        </div>
                        <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                            <p>Sunrise & Sunset</p>
                            <img style={{ marginTop:"2vh",height: "auto", maxWidth: "4vw" }} src={sun} alt="sun" />
                            <p>26 °C</p>
                        </div>
                    </div>
                    <div className="columns p-3">
                        <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                            <p>Humidity</p>
                            <img style={{ marginTop:"2vh",height: "auto", maxWidth: "4vw" }} src={sun} alt="sun" />
                            <p>26 °C</p>
                        </div>
                        <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                            <p>Visibility</p>
                            <img style={{ marginTop:"2vh",height: "auto", maxWidth: "4vw" }} src={sun} alt="sun" />
                            <p>26 °C</p>
                        </div>
                        <div className="column" style={{ background: 'white', borderRadius: '8px', height: '20vh', textAlign: 'center', margin: '0.3rem' }}>
                            <p>Air Quality</p>
                            <img style={{ marginTop:"2vh",height: "auto", maxWidth: "4vw" }} src={sun} alt="sun" />
                            <p>26 °C</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClimateCondition;
