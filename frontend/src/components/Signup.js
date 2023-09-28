import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/username.css";
import { useState } from 'react';
import Notify from './Notify';
// import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const [notify, setNotify] = useState(true);

  const signreq = async () => {
    console.log(name, email, password);
    const response = await fetch("http://localhost:3001/api/user/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
    const json = await response.json();
    if (!json.success) {
      setNotify(false);
      setResponse(json.message)
    } else {
      setNotify(false);
      setResponse("Registred Successfully");
      navigate('/profile')
    };
  }

  return (
    <div className='Container'>
      <div className='wrap'>
        <div className='login'>
          <Link to="/login">
            <button>Log in</button>
          </Link>
        </div>
        <div className='sigHead'>
          <span>
            Sign Up
          </span>
        </div>
        <div className='autContainer'>
          <div>
            <span>Username</span>
            <input type='text'
              placeholder='Name'
              onChange={(e) => { setName(e.target.value) }}
            />
          </div>
          <div>
            <span>Your Email </span>
            <input type="email"
              placeholder='email'
              onChange={(e) => { setEmail(e.target.value) }}
            />
          </div>
          <div>
            <span>Password</span>
            <input type='password'
              placeholder='Password'
              onChange={(e) => { setPassword(e.target.value) }}
            />
          </div>
        </div>
        <div className='submit'>
          <button
            onClick={signreq}
          >Sign up</button>
          <span>Or sign up with social account</span>
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
export default Signup;