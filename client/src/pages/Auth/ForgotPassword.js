import React, { useState } from 'react'
import { Layout } from '../../components/layout/Layout'
import "../../styles/AuthStyles.css"

import toast from 'react-hot-toast';
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const ForgotPassword = () => {

    const [email, setEmail] = useState("")
    const [answer, setAnswer] = useState("")
    const [newPassword, setNewPassword] = useState("")

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
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder='Which is your favourite sport ?'
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <input
                            type="password"
                            placeholder='Enter Your New Password'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </Layout>
    )
}

export default ForgotPassword