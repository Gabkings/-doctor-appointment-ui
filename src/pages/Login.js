import React from 'react'
import { Button, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {

    const onFinish = (values) => {
        console.log("Values ", values)
    }

    return ( <
        div className = "authentication" >
        <
        div className = "authentication-form card p-3" >
        <
        h1 className = "card-title" > Welcome Back < /h1> <
        Form layout = "vertical"
        onFinish = { onFinish } >
        <
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
        LOGIN <
        /Button>

        <
        Link to = "/register"
        className = "anchor mt-2" >
        CLICK HERE TO REGISTER <
        /Link> 


        <
        /Form></div > < /div>
    )
}