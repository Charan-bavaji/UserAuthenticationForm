import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Notify from './Notify';

const Login = () => {
    const navigate = useNavigate();
    
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [response, setResponse] = useState("");
    const [notify, setNotify] = useState(true);
    const loginreq = async () => {
        const response = await fetch('http://localhost:3001/api/user/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password
            })
        })
        const json = await response.json();
        if (!json.success) {
            setResponse(json.message);
            setNotify(false);
        } else {
            setResponse(json.message);
            setNotify(false);
            navigate('/profile');
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
                    <Link to='/Recovery'>
                        <span>Forgot password ?</span>
                    </Link>
                </div>
                <div className='socialBut'>
                    <button>Facebook</button>
                    <button>Twitter</button>
                </div>
            </div>
            <Notify
                response={response}
                notify={notify} />
        </div>
    )
}

export default Login
