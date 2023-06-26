import React, { useState } from 'react'
import { Layout } from '../../components/layout/Layout'
import "../../styles/AuthStyles.css"

import toast from 'react-hot-toast';
import axios from "axios"
import { useNavigate } from 'react-router-dom'

// password icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const ForgotPassword = () => {

    const [email, setEmail] = useState("")
    const [answer, setAnswer] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false);

    const handlePasswordToggle = () => {
        if (showPassword === true) {
            setShowPassword(false)
        } else {
            setShowPassword(true)
        }
    };

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/forgotPassword", { email, answer, newPassword })
            if (res.data.status === true) {
                toast.success(res.data.message);
                setTimeout(() => {
                    navigate("/login")
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
        <Layout title={"forgot-password E-Commerce-app"}>
            <div className='form-controller'>

                <form onSubmit={handleSubmit} className='mt-3'>
                    <h1 className='mb-4'>Reset Password</h1>


                    <div className="mb-3">
                        <input
                            type="email"
                            placeholder='Enter Your Email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mt-3">
                        <input
                            type="text"
                            placeholder='What is your favourite sport'
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            required
                        />

                        <div className="mt-3">
                            <div className="input-group">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="Enter Your New Password"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
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
                    </div>

                    <button type="submit" className="btn btn-primary mt-4">Reset</button>
                </form>

            </div>
        </Layout>
    )
}

export default ForgotPassword