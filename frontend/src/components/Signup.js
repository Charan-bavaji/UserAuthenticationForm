import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/username.css";
import { useState } from 'react';
// import axios from 'axios';

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");
  const [notify, setNotify] = useState(false);
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
    console.log(json)
    if (!json.success) {
      setNotify(true);
      setResponse(json.message)
    } else {
      setResponse("Registred Successfully");
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
      {
        notify ? <span className=" absolute bottom-12 bg-slate-700 text-yellow-50 py-3 px-3 rounded-3xl">{response}</span> : <span></span>
      }
    </div>
  )
}
export default Signup;