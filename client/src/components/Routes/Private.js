import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import { useAuth } from '../../context/Auth';
import Spinner from '../Spinner';

// CHECKING USER IS AUTHENTICATED OR NOT BY USING TOKEN WHICH IS SET DEFAULT TO EVERY REQUEST

const Private = () => {

    const [ok, setOk] = useState(false);
    const [auth,setAuth] = useAuth();

    useEffect(() => {
        
        const authCheck = async () => {
            let res = await axios.get("http://localhost:5000/user-auth");

            if (res.data.ok === true) {
                setOk(true);
            }
            else {
                setOk(false);
            }
        }
        if (auth?.token) {
            authCheck();
        }
    }, [auth?.token]);

    return ok ? <Outlet /> : <Spinner path="" /> 
}

export default Private