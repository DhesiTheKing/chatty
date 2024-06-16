import React, { useState } from 'react'
import { IoSend } from "react-icons/io5";
import useSendMessage from '../../hooks/useSendMessage';
const MessageInput = () => {

  const[message,setMessage]=useState("");
  
  const {loading,sendMessage}=useSendMessage();

  const handleSubmit= async (e)=>{
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");

  }

  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
      <div className='w-full relative'>
        <input type="text" 
        placeholder='type a message...'
        value={message}
        onChange={(e)=>setMessage(e.target.value)}
        className='border text-sm rounded-lg block w-full p-2.5 bg-gray-900 text-white' />

        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3 '>
          {loading ? <span className='loading loading-dots'></span>:<IoSend />}
        </button>

      </div>
      
    </form>
  )
}

export default MessageInput
