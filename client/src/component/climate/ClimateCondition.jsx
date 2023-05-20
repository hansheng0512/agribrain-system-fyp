import React from 'react';
import weather from "../../image/weather/weather.png";
import CameronHighlands from "../../image/weather/CameronHighlands.jpg"
import sun  from "../../image/weather/sun.png"

const ClimateCondition = () => {
    return (
        <div className="box is-shadowless" style={{ padding: 0, margin: 0 }}>
            <div className="columns p-3">
                <div
                    className="column is-one-third p-6"
                    style={{
                        background: '#f2f3f4',
                        borderRadius: '8px 0 0 8px',
                    }}
                >
                    {/*<h1 className="title mt-3">Cameron Highlands</h1>*/}
                    {/*<h2 className="subtitle mt-1"> 21/05/2023 , 16:00</h2>*/}

                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'left',
                            marginLeft:"2vw"
                    }}>
                        <img style={{ height: "auto", maxWidth: "80%" }} src={weather} alt="weather" />
                    </div>
                    <div style={{ textAlign: 'right', marginRight:"2vw"}}>
                        <h1 style={{fontSize:"60px",fontWeight:"bold"}}>28 °C</h1>
                        <h1 style={{fontSize:"30px"}} >Sun, 21/05/2023</h1>
                    </div>

                    <hr style={{ borderTop: '1px solid #ccc', margin: '1rem 0' }} />

                    <div style={{ textAlign: 'left', marginRight:"2vw"}}>
                        <h1 className="text" >Mostly Cloudy</h1>
                        <h1 className="text" >Rain 30%</h1>
                    </div>

                    <br/>

                    <div style={{ position: 'relative' }}>
                        <img
                            style={{borderRadius: '15px' }}
                            src={CameronHighlands}
                            alt="CameronHighlands"
                        />
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
                            Cameron Highlands, MY
                        </div>
                    </div>
                </div>
                <div
                    className="column pt-5"
                    style={{
                        background: '#E1F6F0',
                        borderRadius: '0 8px 8px 0',
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
                            <p>26 °C</p>
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
