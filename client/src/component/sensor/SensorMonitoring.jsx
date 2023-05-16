import React from 'react';
import {useSelector} from "react-redux";

const SensorMonitoring = () => {
    const {user} = useSelector((state) => state.auth);
    return (
        <div>
            <h1 className="title">Sensor Monitoring</h1>
        </div>
    );
};

export default SensorMonitoring;
