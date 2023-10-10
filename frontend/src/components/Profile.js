import { React } from 'react'
import { useNavigate } from 'react-router-dom';
import profileImg from "../assets/profile.jpg"
const Profile = () => {
  const navigate = useNavigate();
  const logOutMe = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/logout", {
        method: "GET",
      });

      if (response.ok) {
        navigate("/login")
      } else {
        console.log("LogOut Failed")
      }
    } catch (e) {
      console.log('an error', e)
    }
  }

  return (
    <div className="flex w-full h-[100vh] justify-center items-center bg-red-950">
      <div className='flex w-[30rem] h-[28rem] justify-center items-center flex-col rounded-lg overflow-hidden gap-[2rem]'>
        <img width={600} height={600} src={profileImg} alt='image' className=' rounded-xl overflow-hidden shadow-2xl' />
        <button className="w-32 h-10 bg-black text-violet-50 rounded-md hover:cursor-pointer "
          onClick={logOutMe}>Log Out</button>
      </div>
    </div>
  )
}

export default Profile;