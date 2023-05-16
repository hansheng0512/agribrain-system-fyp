import React, {useEffect} from 'react';
import Layout from '../../Layout/Layout'
import FormAddCrop from "../../../component/precision/crop/FormAddCrop";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getMe} from "../../../features/authSlice";

const AddCrop = () => {
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
            <FormAddCrop/>
        </Layout>
    );
};

export default AddCrop;
