import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import useConversations from '../zustand/useConversation';


const useGetMessages = () => {
    const[loading,setLoading] = useState(false)
    const {messages,setMessages,selectedConversations} = useConversations();


    useEffect(()=>{

        const getMessages = async () =>{
            setLoading(true);
            try {
                
                const res = await fetch(`/api/messages/${selectedConversations._id}`);

                const data= await res.json();

                if(data.errr) {
                    throw new Error("Error :"+data.error);
                }
                
                setMessages(data);

            } catch (error) {
                toast.error("Error :"+error.messages)
            }
            finally{
                setLoading(false);
            }

        }
        if(selectedConversations?._id) getMessages();


    },[selectedConversations?._id,setMessages])

    return {messages,loading};
}

export default useGetMessages