import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    const [respond, setRespond] = useState("");
    const [notify, setNotify] = useState(false);
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
        if (json.success) {
            navigate('/profile');
        } else {
            setRespond(json.message);
            setNotify(true);
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
                    {/* <Link to="/profile"> */}
                    <button id='loginbut'
                        onClick={loginreq}>Login</button>
                    {/* </Link> */}
                    <Link to='/Recovery'>
                        <span>Forgot password ?</span>
                    </Link>
                </div>
                <div className='socialBut'>
                    <button>Facebook</button>
                    <button>Twitter</button>
                </div>
            </div>
            {notify ? <span className=" absolute bottom-12 bg-slate-700 text-yellow-50 py-3 px-3 rounded-3xl">{respond}</span> : <span></span>}
        </div>
    )
}

export default Login
