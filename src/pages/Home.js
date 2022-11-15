import React, { useEffect } from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
export const Home = () => {

    const getUserInfor = async() => {
        try {
            const response = axios.post('api/user/get-user-info-by-id', {}, {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token')
                }
            })
            console.log(response)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getUserInfor()
    }, []);

    return ( < Layout > < h1 > Hello < /h1> < /Layout > )
}