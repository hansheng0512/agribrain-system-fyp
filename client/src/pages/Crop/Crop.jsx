import React, {useEffect} from 'react';
import Layout from '../Layout/layout'
import CropList from '../../component/CropList'
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getMe} from "../../features/authSlice";
const Crop = () => {
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
            <CropList/>
        </Layout>
    );
};

export default Crop;
