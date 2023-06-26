import React, { useState } from 'react'
import { Layout } from '../../components/layout/Layout'
import "../../styles/AuthStyles.css"

import toast from 'react-hot-toast';
import axios from "axios"
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [answer, setAnswer] = useState("")
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
            const res = await axios.post("http://localhost:5000/registerUser", { name, email, password, phone, address, answer })
            if (res.data.status === true) {
                console.log("data saved successfully");
                toast.success(res.data.message)
                setTimeout(() => {
                    navigate("/login")
                }, 2000)
            }
            else {
                console.log(res);
                toast.error(res.data.message)
                setTimeout(() => {
                    navigate("/login")
                }, 2000)
            }
        } catch (error) {
            toast.error("User Registration failed")
            console.log("err is occured", error);
        }
    }

    return (
        <Layout title={"Register E-Commerce-app"}>
            <div className='form-controller'>

                <form onSubmit={handleSubmit} className='mt-2'>
                    <h1 className='mb-4'>Register User</h1>
                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder='Enter Your Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                        />
                    </div>

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

                    <div className="mb-3" id="password">
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
                                style={{ width: "40px", background: "green", border : "none", borderRadius : "10px" }}
                            >
                                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />

                            </button>
                        </div>
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder='Enter Your Phone'
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder='Enter Your Address'
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <input
                            type="text"
                            placeholder='What is your favourite sport'
                            value={answer}
                            onChange={(e) => setAnswer(e.target.value)}
                            className="form-control"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary">register</button>
                </form>

            </div>
        </Layout>
    )
}

export default Register