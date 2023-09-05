import React from 'react'
import { Link } from 'react-router-dom'
// import avathar from "../assets/dp.jpg"
import "../styles/username.css"

const Signup = () => {
  //  Login Ui

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
            <span>Name</span>
            <input type='text' placeholder='Name' />
          </div>
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
          <button>Sign up</button>
          <span>Or sign up with social account</span>
        </div>
        <div className='socialBut'>
          <button>Facebook</button>
          <button>Twitter</button>
        </div>
      </div>
    </div>
  )
}
export default Signup
