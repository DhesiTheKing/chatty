import React, { useEffect } from 'react'
import Messages from './Messages'
import MessageInput from './MessageInput'
import { SiGooglemessages } from "react-icons/si";
import useConversations from '../../zustand/useConversation.js';
import { useAuthContext } from '../../context/AuthContext.jsx';

const MessageContainer = () => {
    const {selectedConversations,setSelectedConversations} = useConversations();

    useEffect(()=>{
        setSelectedConversations(null);
    },[setSelectedConversations])
    
  return (
    <div className='md:min-w-[450px] flex flex-col'>

        {!selectedConversations ? <NochatSelected/> :(
            <>
            <div className='bg-slate-800 px-5 py-3 mb-5'>
                <div className='chat-image avatar'>
                    <div className='w-10 rounded-full'>
                        <img src={selectedConversations.profilePic} alt="user avator" />
                    </div>
                    <span className='text-white font-bold py-2 px-3'>{selectedConversations.username}</span>
                </div>
        
            </div>

            <Messages/>
            <MessageInput/>
            </>
        )}
      
    </div>
  )
}

export default MessageContainer


const NochatSelected = () => {
    const {authUser} = useAuthContext();
    return(
        <div className='flex items-center justify-center w-full h-full'>
            <div className='px-4 text-center sm:text-lg md:text-xl text-white font-semibold flex flex-col items-center gap-2'>
                <p>Welcome {authUser.username}</p>
                <p>Select chat to start messaging..</p>
                <SiGooglemessages  className='text-3xl md:text-6xl text-center'/>

            </div>

        </div>
    )
}
