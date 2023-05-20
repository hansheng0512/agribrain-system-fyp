import React, {useEffect, useState} from 'react';
import FarmingRecord from "./farmingRecord/FarmingRecord";
import {Link} from "react-router-dom";
import axios from "axios";

const PrecisionFarming = () => {

    const [crop, setCrop] = useState([]);
    const [farming, setFarming] = useState([]);


    useEffect(() => {
        getCrops();
        getFarming();
    }, []);

    const getCrops = async () => {
        const response = await axios.get("http://localhost:5000/api/v1/crop");
        setCrop(response.data);
    };


    const getFarming = async () => {
        const response = await axios.get("http://localhost:5000/api/v1/farming");
        setFarming(response.data);
    };



    return (
        <div>
            <h1 className="title" style={{marginBottom:"8vh"}}>Precision Farming</h1>

        {/*    Crop Table */}
            <h1 className="subtitle is-underlined">Crop Listing</h1>
            <table className="table is-bordered is-hoverable is-fullwidth mb-6">
                <thead>
                <tr style={{ backgroundColor: '#E1F6F0' }}>
                    <th>No</th>
                    <th>Crop Name</th>
                    <th>Created By</th>
                </tr>
                </thead>
                <tbody>
                {crop.map((crop, index) => (
                    <tr key={crop.crop_uuid}>
                        <td>{index + 1}</td>
                        <td>{crop.crop_name}</td>
                        <td>{crop.USER_T.user_fullname}</td>
                    </tr>
                ))}
                </tbody>
            </table>

        {/*    Farming Table*/}
            <h1 className="subtitle is-underlined">Farming Listing</h1>
            <table className="table is-bordered is-hoverable is-fullwidth mb-6">
                <thead>
                <tr style={{ backgroundColor: '#E1F6F0' }}>
                    <th>No</th>
                    <th>Farming Name</th>
                    <th>Date</th>
                    <th>Crop Name</th>
                    <th>Created By</th>
                </tr>
                </thead>
                <tbody>
                {farming.map((farming, index) => (
                    <tr key={farming.farming_uuid}>
                        <td>{index + 1}</td>
                        <td>{farming.farming_name}</td>
                        <td>{farming.farming_date}</td>
                        <td>{farming.CROP_T.crop_name}</td>
                        <td>{farming.USER_T.user_fullname}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default PrecisionFarming;
