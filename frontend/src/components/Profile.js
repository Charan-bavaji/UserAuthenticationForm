import { React } from 'react'
import { useNavigate } from 'react-router-dom';
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
    <div className="flex w-full h-[100vh] bg-slate-200 justify-center items-center">
      <button className="w-20 h-10 bg-red-200 rounded-md hover:cursor-pointer "
        onClick={logOutMe}>Log Out</button>
    </div>
  )
}

export default Profile
