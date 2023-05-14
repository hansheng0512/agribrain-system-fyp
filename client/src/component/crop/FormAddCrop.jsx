import React,{useState} from 'react';
import axios from "axios";
import {useNavigate} from "react-router-dom";


const FormAddCrop = () => {
    const [name,setName] = useState("");
    const [message,setMessage] = useState("");

    const navigate = useNavigate();

    const handleSaveCrop = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/crop",{
                crop_name:name,
            })
            navigate("/crop");
        }catch (error) {
            if(error.response){
                setMessage(error.response.data.message);
            }
        }
    }

    return (
        <div>
            <h1 className="title">Crop</h1>
            <h2 className="subtitle">Add New Crop</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form onSubmit={handleSaveCrop}>
                            <p className="has-text-centered">
                                {message}
                            </p>
                            <div className="field">
                                <label className="label"> Crop Name</label>
                                <div className="control">
                                    <input
                                        type="text"
                                        className="input"
                                        value={name}
                                        onChange={(e)=> setName(e.target.value)}
                                        placeholder='Crop Name'
                                    />
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button type="submit" className="button is-success">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormAddCrop;
