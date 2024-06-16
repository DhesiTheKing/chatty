import React, { useState } from 'react'
import GenderCheck from './GenderCheck'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'

const Signup = () => {

  const [inputs,setInputs]=useState({
    fullName:'',
    username:'',
    password:'',
    confirmPassword:'',
    gender:''
  })

  const{loading,signup} = useSignup();

  const handleGender=(gender)=>{
    setInputs({...inputs,gender});
  }

  const handleSubmit= async (e)=>{
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto bg-slate-900'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-white'>
          SignUp  
          <span className='text-blue-700'> Chatty</span>
        </h1>
        <form onSubmit={handleSubmit}>

        <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Fullname</span>
            </label>
            <input type="text" value={inputs.fullName} onChange={(e)=>setInputs({...inputs,fullName:e.target.value})} className="input input-bordered w-full max-w-xs bg-gray-400" />          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input type="text" value={inputs.username} onChange={(e)=>setInputs({...inputs,username:e.target.value})} className="input input-bordered w-full max-w-xs bg-gray-400" />          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Password</span>
            </label>
            <input type="password" value={inputs.password} onChange={(e)=>setInputs({...inputs,password:e.target.value})} className="input input-bordered w-full max-w-xs bg-gray-400" />          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Confirm Password</span>
            </label>
            <input type="password" value={inputs.confirmPassword} onChange={(e)=>setInputs({...inputs,confirmPassword:e.target.value})} className="input input-bordered w-full max-w-xs bg-gray-400" />          </div>

          <GenderCheck onCheckGender={handleGender} selectedGender={inputs.gender}/>
          
          <Link to={"/login"} className='flex flex-col text-white py-3 hover:text-blue-500 cursor-pointer'>Already have an account</Link>

          <div>
            <button className="btn btn-outline mt-5  w-full bg-white text-black" disabled={loading}>
              {!loading ? "Signup":<span className='loading loading-spinner'></span>}
              </button>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default Signup
