import React, {useEffect} from 'react';
import Layout from '../../Layout/Layout'
import FormEditCrop from "../../../component/precision/crop/FormEditCrop";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getMe} from "../../../features/authSlice";

const EditCrop = () => {
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
            <FormEditCrop/>
        </Layout>
    );
};

export default EditCrop;
