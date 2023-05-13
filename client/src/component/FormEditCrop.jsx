import React from 'react';

const FormEditCrop = () => {
    return (
        <div>
            <h1 className="title">Crop</h1>
            <h2 className="subtitle">Edit Crop</h2>
            <div className="card is-shadowless">
                <div className="card-content">
                    <div className="content">
                        <form>
                            <div className="field">
                                <label className="label"> Crop Name</label>
                                <div className="control">
                                    <input type="text" className="input" placeholder='Crop Name'/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="control">
                                    <button className="button is-success">
                                        Update
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

export default FormEditCrop;
