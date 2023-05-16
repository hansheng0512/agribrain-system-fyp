import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getMe} from "../../../features/authSlice";
import Layout from "../../Layout/Layout";
import CropManagementList from "../../../component/precision/cropManagement/CropManagementList";

const ManagementCropDashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError} =useSelector((state => state.auth));

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if(isError){
            navigate("/");
        }
    }, [isError,navigate]);

    return (
        <Layout>
            <CropManagementList/>
        </Layout>
    );
};

export default ManagementCropDashboard;
