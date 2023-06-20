import React, { useState } from 'react'
import { Layout } from '../../components/layout/Layout'
import "../../styles/AuthStyles.css"

import toast from 'react-hot-toast';
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:5000/loginUser", { email, password })
            if (res.data.status === true) {
                toast.success(res.data.message);
                setTimeout(()=>{
                    navigate("/")
                },2000);
            }
            else {
                toast.error(res.data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("catch block error")
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
                        <input
                            type="password"
                            placeholder='Enter Your Password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control"
                            id="exampleInputPassword1"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>

            </div>
        </Layout>
    )
}

export default Login