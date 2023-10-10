import React from 'react'
import { useState } from 'react';
const Reset = () => {
  const [password, setpassword] = useState("");
  const [comfpassword, setcomfpassword] = useState("");
  const [response, setResponse] = useState("");
  const [color, setColor] = useState('red')

  const Send = async () => {
    console.log(color);
    try {
      const Responses = await fetch("http://localhost:3001/api/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      const msg = await Responses.json();
      console.log(msg.message)
      if (Responses.ok) {
        setResponse(msg.message);
        setColor('green');
      } else {
        setResponse(msg.message);
      }
    } catch (error) {
      console.log(error);
      setResponse("Internal Server error ");
    }
  }
  return (
    <div className="w-full h-[100vh] bg-[#9fa29f] flex justify-center items-center">
      <div className="w-[22rem] h-[20rem] bg-[#faf1e2] flex justify-baseline items-center flex-col rounded-xl">
        <div className='py-2'>
          <h1 className="text-lg">Reset password</h1>
        </div>
        <div className='py-4 h-26'>
          <span className=" relative top-1 bg-transparent text-[#757367]">New Password</span>
          <input type="password"
            placeholder='password'
            value={password}
            className="relative top-3 bg-transparent border-b-2 border-[#333] outline-none pl-[0px]"
            onChange={(e) => {
              setpassword(e.target.value)
            }}
          />
        </div>
        <div className='py-2 h-28 w-[18rem]'>
          <span className=" relative top-1 bg-transparent text-[#757367]">Comform password</span>
          <input type="password"
            placeholder='comform password'
            value={comfpassword}
            className=" z-10 relative top-3 bg-transparent border-b-2 border-[#333] outline-none pl-[0px]"
            onChange={(e) => {
              setcomfpassword(e.target.value)
            }}
          />
        </div>
        <div className='w-full h-10 flex justify-center items-center'>
          <button onClick={Send} className='bg-black py-2 px-9 text-[#faf1e2] rounded-[50px]' >send
          </button>
        </div>
      </div>
      {
        response && <span className={`absolute flex justify-center text-center bottom-12 bg-[#faf1e2] text-${color}-500 py-3 px-3 rounded-3xl`}>{response}</span>
      }
    </div>
  )
}

export default Reset
