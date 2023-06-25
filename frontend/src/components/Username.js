import React from 'react'
import { Link } from 'react-router-dom'
import avathar from "../assets/dp.jpg"
import styles from "../styles/username.css"

const Username = () => {
  //  Login Ui
  
  return (
    <div className='container max-auto'>
      <div className='flex justify-center items-center h-screen '>
        <div className={styles.glass}>
          <div className='title flex flex-col items-center '>
            <h4 className="text-5xl font-bold ">Charan</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-5'>
              Explore more by connecting with us</span>
          </div>

          <form className='py-1'>
            <div className="profile flex justify-center py-4">
              <img src='' alt='avathar' />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input type='text' placeholder='Username' />
              <button className={styles.btn} type='submit'> Let's Go</button>
            </div>

            <div className='text-center py-4'>
              <span className='text-gray-500'>Not a Member <Link className='text-red-500' to='/register'>Register now</Link></span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Username
