import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const CropList = () => {
    const [crop, setCrop] = useState([]);

    useEffect(() => {
        getCrops();
    }, []);

    const getCrops = async () => {
        const response = await axios.get("http://localhost:5000/api/v1/crop");
        setCrop(response.data);
    };

    const deleteProduct = async (cropId) => {
        await axios.delete(`http://localhost:5000/api/v1/crop/${cropId}`);
        getCrops();
    };

    return (
        <div>
            <h1 className="title">Crops</h1>
            <h2 className="subtitle">List of Crops</h2>
            <Link to="/precision-farming/crop/add" className="button mb-2" style={{backgroundColor:'#71AF9D',color:"white"}}>
                Add New
            </Link>
            <table className="table is-bordered is-hoverable is-fullwidth">
                <thead>
                <tr style={{ backgroundColor: '#E1F6F0' }}>
                    <th>No</th>
                    <th>Crop Name</th>
                    <th>Created By</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {crop.map((crop, index) => (
                    <tr key={crop.crop_uuid}>
                        <td>{index + 1}</td>
                        <td>{crop.crop_name}</td>
                        <td>{crop.USER_T.user_fullname}</td>
                        <td>
                            <Link
                                to={`/precision-farming/crop/edit/${crop.crop_uuid}`}
                                className="button is-small is-info"
                            >
                                Edit
                            </Link>
                            <button
                                onClick={() => deleteProduct(crop.crop_uuid)}
                                className="button is-small is-danger"
                            >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CropList;