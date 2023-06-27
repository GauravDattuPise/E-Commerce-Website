import React, { useEffect, useState } from 'react'
import { useAuth } from '../../context/Auth'
import axios from 'axios';
import { Outlet } from 'react-router-dom';
import Spinner from '../Spinner';

const AdminRoute = () => {
    const [auth, setAuth] = useAuth();
    const [ok, setOk] = useState(false);

    useEffect(()=>{
      async  function adminCheck() {
            const res = await axios.get("http://localhost:5000/admin-auth");
           console.log(res.data);
            if (res.data.ok) {
                setOk(true)
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                })
            }
            else {
                setOk(false)
            }
        }
        if (auth?.token) {
            adminCheck();
        }
    },[auth?.token])


    return ok ? <Outlet /> : <Spinner path="" />
         
}

export default AdminRoute