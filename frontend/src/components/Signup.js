import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/username.css";
import { useState } from 'react';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [response, setResponse] = useState("");

  const signreq = async () => {

    console.log(name, email, password);

    try {
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

      if (response.ok) {
        navigate('/profile');
      } else {
        const errorMsg = await response.json();
        console.log(errorMsg.message);
        setResponse(errorMsg.message);
      }
    } catch (error) {
      setResponse('An error ,Please try later');
    }
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
              required
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
        response && <span className=" absolute flex justify-center text-center bottom-12 bg-[#faf1e2] text-red-500 py-3 px-3 rounded-3xl">{response}</span>
      }
    </div>
  )
}
export default Signup;