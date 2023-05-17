import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const ProductList = () => {
    const [crop, setCrop] = useState([]);

    useEffect(() => {
        getCrops();
    }, []);

    const getCrops = async () => {
        const response = await axios.get("http://localhost:5000/api/v1/crop");
        setCrop(response.data);
        console.log(response.data);
    };

    const deleteProduct = async (cropId) => {
        await axios.delete(`http://localhost:5000/api/v1/crop/${cropId}`);
        getCrops();
    };

    return (
        <div>
            <h1 className="title">Crops</h1>
            <h2 className="subtitle">List of Crops</h2>
            <Link to="/precision-farming/crop/add" className="button is-primary mb-2">
                Add New
            </Link>
            <table className="table is-striped is-fullwidth">
                <thead>
                <tr>
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

export default ProductList;