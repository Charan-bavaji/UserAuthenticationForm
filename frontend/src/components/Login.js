import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
// import Notify from './Notify';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [response, setResponse] = useState("");
    // const [notify, setNotify] = useState(true);
    const loginreq = async () => {
        try {
            const response = await fetch('http://localhost:3001/api/user/login', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            if (response.ok) {
                navigate('/profile');

            } else {
                const errorData = await response.json();
                console.log(errorData.message)
                setResponse(errorData.message);
            }
        } catch (error) {
            console.error('Error', error);
            setResponse('An error, Please try again');
        }
    }

    return (
        <div className='Container'>
            <div id='wrap1'>
                <div className='login'>
                    <Link to="/signup">
                        <button>Signup</button>
                    </Link>
                </div>
                <div className='sigHead'>
                    <span>
                        Login
                    </span>
                </div>
                <div className='autContainer'>
                    <div>
                        <span>Your Email </span>
                        <input type="email"
                            placeholder='email'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <span>Password</span>
                        <input type='password'
                            placeholder='Password'
                            value={password}
                            onChange={(e) => {
                                setpassword(e.target.value)
                            }}
                        />
                    </div>
                </div>
                <div className='submit'>
                    <button id='loginbut'
                        onClick={loginreq}>Login
                    </button>
                    <Link to='/forgotpassword'>
                        <span>Forgot password ?</span>
                    </Link>
                </div>
                <div className='socialBut'>
                    <button>Facebook</button>
                    <button>Twitter</button>
                </div>
            </div>
            {
                response && <span className=" absolute flex justify-center text-center bottom-12 bg-[#faf1e2] text-red-500 py-3 px-3 rounded-3xl">{response}</span>
            }

        </div>
    )
}

export default Login
