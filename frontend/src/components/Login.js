import React from 'react'
import { Link } from 'react-router-dom'
const Login = () => {
    return (
        <div className='Container'>
            <div id='wrap1'>
                <div className='sigHead'>
                    <span>
                        Login
                    </span>
                </div>
                <div className='autContainer'>
                    <div>
                        <span>Your Email </span>
                        <input type="email" placeholder='email' />
                    </div>
                    <div>
                        <span>Password</span>
                        <input type='password' placeholder='Password' />
                    </div>
                </div>
                <div className='submit'>
                    <Link to="/profile">
                    <button id='loginbut'>Login</button>
                    </Link>
                    <Link to='/recovery'>
                    <span>Or login with social account</span>
                    </Link>
                </div>
                <div className='socialBut'>
                    <button>Facebook</button>
                    <button>Twitter</button>
                </div>
            </div>
        </div>
    )
}

export default Login
