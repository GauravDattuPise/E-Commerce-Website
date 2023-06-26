import React, { useState } from 'react'
import { Layout } from '../../components/layout/Layout'
import "../../styles/AuthStyles.css"

import toast from 'react-hot-toast';
import axios from "axios"
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/Auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [auth, setAuth] = useAuth();

    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordToggle = () => {
        if (showPassword === true) {
            setShowPassword(false)
        } else {
            setShowPassword(true)
        }
    };

    const navigate = useNavigate();
    const location = useLocation();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/loginUser", { email, password })
            if (res && res.data.status) {
                toast.success(res.data.message);
                setAuth({
                    ...auth,
                    user: res.data.user,
                    token: res.data.token
                });
                localStorage.setItem("auth", JSON.stringify(res.data));
                setTimeout(() => {
                    navigate(location.state || "/")
                }, 2000);
            }
            else if (res.data.status === false) {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("User Not Found")
        }
    }

    return (
        <Layout title={"Login E-Commerce-app"}>
            <div className='form-controller'>

                <form onSubmit={handleSubmit} className='mt-3'>
                    <h1 className='mb-4'>Login User</h1>


                    <div className="mb-3">
                        <input
                            type="email"
                            placeholder='Enter Your Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <div className="input-group">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter Your Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="form-control"
                                required
                                style={{width : "200px"}}
                            />
                            <button
                                type="button"
                                onClick={handlePasswordToggle}
                                style={{ width: "40px", background: "green", border: "none", borderRadius: "10px" }}
                            >
                                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
                            </button>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>

                    <p className='forgot-password mt-4' style={{ cursor: 'pointer', width:"150px"}} onClick={() => navigate("/forgot-password")} >forgot-password</p>
                </form>

            </div>
        </Layout>
    )
}

export default Login