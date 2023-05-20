import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const FarmingRecord = () => {

    const [farming, setFarming] = useState([]);

    useEffect(() => {
        getFarming();
    }, []);

    const getFarming = async () => {
        const response = await axios.get("http://localhost:5000/api/v1/farming");
        setFarming(response.data);
    };

    return (
        <div>
            <h1 className="title">Farming Record</h1>
            <h2 className="subtitle">List of Farming Records</h2>
            <Link to="/precision-farming/farming-record/add" className="button mb-2" style={{backgroundColor:'#71AF9D',color:"white"}}>
                Add New
            </Link>
            <table className="table is-bordered is-striped is-fullwidth">
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

export default FarmingRecord;
