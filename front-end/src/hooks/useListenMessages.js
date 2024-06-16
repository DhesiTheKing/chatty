import React, { useEffect } from 'react'
import { useSocketContext } from '../context/SocketContext'
import useConversations from '../zustand/useConversation';
import notification from '../sound/notification.mp3'

const useListenMessages = () => {
  const {socket} = useSocketContext();
  const {messages,setMessages} = useConversations();

  useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        newMessage.shake = true;
        const audio = new Audio(notification);
        audio.play();
        setMessages([...messages,newMessage]);
    })

    return ()=> socket?.off("newMessage");
  },[socket,setMessages,messages])
}

export default useListenMessages