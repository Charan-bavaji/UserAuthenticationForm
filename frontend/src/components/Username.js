import React from 'react'

const Username = () => {
  //  Login Ui

  return (
    <div className='container max-auto bg-cyan-500'>
      <div className='flex justify-center items-center h-screen bg-slate-800'>
        <div>
          <div className='title flex flex-col items-center bg-slate-600'>
            <h4 className="text-5xl font-bold bg-slate-400">Charan</h4>
            <span className='py-4 text-xl w-2/3 text-center text-gray-5 bg-neutral-700'>
              Explore more by connecting with us</span>
          </div>

          <form className='py-1'>
            <div className="profile flext justify-center py-4">
              <img src='' alt='avathar' />
            </div>

            <div className="textbox">
              <input type='text' placeholder='Username' />
              <button type='submit'> Let's Go</button>
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default Username
