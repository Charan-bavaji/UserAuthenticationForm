import React from 'react'
import "../styles/username.css"
import { Link } from 'react-router-dom'
const Home = () => {
    return (
        <div className='home'>
            <button><Link to={"/signup"}>Register</Link></button>
            <button><Link to={"/login"}>Login</Link></button>
        </div>
    )
}
export default Home