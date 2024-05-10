import React, { useContext } from 'react'
import { AuthContext } from '../contects/AuthProvider'
import { useLocation, useNavigate } from 'react-router-dom';

const LogOut = () => {
    const {logout}=useContext(AuthContext);
    const location=useLocation();
    const navigate=useNavigate();
    const from=location.state?.from?.pathname||"/";
    const handleLogout=()=>{ 
        logout().then(()=>{
            alert("Sign-out successfully");
            navigate(from,{replace:true})
        }).catch((error)=>{

        });
         
    }
  return (
    <div className='h-screen bg-blue-300 flex items-center justify-center'>
      <button className='bg-red-700 px-8 py-2 text-white rounded' onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default LogOut
