import React from 'react'
import { Button, Form, Input } from "antd";

import { Link, useNavigate } from 'react-router-dom'
import toast from "react-hot-toast";
import { useDispatch } from 'react-redux';
import axios from 'axios'

import { showLoading, hideLoading } from '../redux/alertsReducer';

export const Register = () => {
    const dispatch = useDispatch();
    const navigation = useNavigate()
    const onFinish = async(values) => {
        try {
            dispatch(showLoading());
            const response = await axios.post("https://obscure-mesa-07404.herokuapp.com/api/user/register", values)
            dispatch(hideLoading());
            if (response.data.success) {
                toast.success(response.data.message)
                toast.success("Redirecting to login page")
                navigation("/login")
            } else {
                toast.error(response.data.message)
            }
        } catch (error) {
            dispatch(hideLoading());
            toast.error(error.message)
        }
    }
    return ( <
        div className = "authentication" >
        <
        div className = "authentication-form card p-3" >
        <
        h1 className = "card-title" > Nice To Meet U < /h1> <
        Form layout = "vertical"
        onFinish = { onFinish } >
        <
        Form.Item label = "Name"
        name = "name" >
        <
        Input placeholder = "Name" / >
        <
        /Form.Item> <
        Form.Item label = "Email"
        name = "email" >
        <
        Input placeholder = "Email" / >
        <
        /Form.Item> <
        Form.Item label = "Password"
        name = "password" >
        <
        Input placeholder = "Password"
        type = "password" / >
        <
        /Form.Item>

        <
        Button className = "primary-button my-2 full-width-button"
        htmlType = "submit" >
        REGISTER <
        /Button>


        <
        Link to = "/login"
        className = "anchor mt-2" >
        CLICK HERE TO LOGIN <
        /Link> 

        <
        /Form> < /
        div > <
        /div>
    )
}