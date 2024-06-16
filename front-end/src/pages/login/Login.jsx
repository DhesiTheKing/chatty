import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {

  const[username,setUserName]=useState("");
  const[password,setPassword]=useState("");
  const{loading,login}=useLogin();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    await login(username,password);

  }

  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto rounded-md bg-slate-900'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-white'>
          Login 
          <span className='text-blue-700'> Chatty</span>
        </h1>
        <form onSubmit={handleSubmit}>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Username</span>
            </label>
            <input type="text" className="input input-bordered w-full max-w-xs bg-slate-400"
            value={username}
            onChange={(e)=>setUserName(e.target.value)}
            />
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text text-white'>Password</span>
            </label>
            <input type="password" className="input input-bordered w-full max-w-xs bg-slate-400" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <Link to={"/signup"} className='flex text-white py-2 cursor-pointer hover:text-blue-500 '>{"Don't have an account ?"}</Link>

          <div>
          <button className="btn btn-outline mt-5  w-full bg-white text-black" disabled={loading}>
              {!loading ? "Login":<span className='loading loading-spinner'></span>}
              </button>
          </div>
        </form>
      </div>
      
    </div>
  )
}

export default Login
