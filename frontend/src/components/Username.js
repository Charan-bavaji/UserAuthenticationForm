import React from 'react'
// import { Link } from 'react-router-dom'
// import avathar from "../assets/dp.jpg"
import "../styles/username.css"

const Username = () => {
  //  Login Ui

  return (
    <div className='Container'>
      <div className='wrap'>
        <div className='login'>
          <button>Log in</button>
        </div>
        <div className='sigHead'>
          <span>
            Sign Up
          </span>
        </div>
        <div className='autContainer'>
          <div>
            <span>Your Email </span>
            <input type="email" placeholder='email' />
          </div>
          <div>

            <span>Name</span>
            <input type='text' placeholder='Name' />
          </div>
          <div>
            <span>Password</span>
            <input type='password' placeholder='Password' />
          </div>
        </div>
        <div className='submit'>
          <button>Sign up</button>
          <a href='#'>Or sign up with social account</a>
        </div>
        <div className='socialBut'>
          <button>Facebook</button>
          <button>Twitter</button>
        </div>
      </div>
    </div>
  )
}
export default Username
