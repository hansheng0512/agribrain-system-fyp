import React, {useEffect} from 'react';
import Layout from '../Layout/Layout'
import FormEditUser from "../../component/user/FormEditUser";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getMe} from "../../features/authSlice";
import {Helmet} from "react-helmet";

const EditUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {isError,user} =useSelector((state => state.auth));

    useEffect(() => {
        dispatch(getMe());
    }, [dispatch]);

    useEffect(() => {
        if(isError){
            navigate("/");
        }
        if(user && user.user.user_role !== "Farmer"){
            navigate("/dashboard");
        }
    }, [isError,user,navigate]);

    return (
        <Layout>
            <Helmet>
                <title>AgriBrain | User</title>
            </Helmet>
            <FormEditUser/>
        </Layout>
    );
};

export default EditUser;
