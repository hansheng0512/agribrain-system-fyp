import React, {useEffect} from 'react';
import Layout from '../Layout/Layout'
import UserList from "../../component/user/UserList";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {getMe} from "../../features/authSlice";
import {Helmet} from "react-helmet";

const Users = () => {
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
            <UserList/>
        </Layout>
    );
};

export default Users;
