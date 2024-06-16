import React from 'react'
import {useAuthContext} from '../../context/AuthContext';
import { extractTime } from '../../utils/extractTime';
const Message = ({message}) => {

  const {authUser} = useAuthContext();
  const fromMe=message.senderId === authUser._id;
  const chatClassName= fromMe ? 'chat-end':'chat-start';
  const bubbleBgColour=fromMe ? 'bg-blue-500':'bg-grey-400';
  const time = extractTime(message.createdAt);
  const isShake = message.shake ? "shake" : "";
  return (
    <div className={`chat ${chatClassName}`}>
        <div className={`chat-bubble text-white ${bubbleBgColour} ${isShake}`}> {message.message} </div>
        <div className={`chat-footer opacity-60 text-xs flex gap-1 items-center text-gray-400`}>{time}</div>
      
    </div>
  )
}

export default Message
