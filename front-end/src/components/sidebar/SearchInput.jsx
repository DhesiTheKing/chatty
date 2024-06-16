import React, { useState } from 'react'
import useConversations from '../../zustand/useConversation';
import useGetConversations from '../../hooks/useGetConversations'
import toast from 'react-hot-toast';
const SearchInput = () => {

  const[search,setSearch] = useState("");
  const {setSelectedConversations} = useConversations();
  const {conversations} = useGetConversations();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!search) return;

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

    if(conversation){
      setSelectedConversations(conversation);
      setSearch("");
    }else toast.error("no user found :(");

  }

  return (
    <form className='flex items-center gap-2' onSubmit={handleSubmit}>
        <input type="text" placeholder='search..' className='input input-bordered rounded-md'
        value={search}
        onChange={(e)=> setSearch(e.target.value)}
        />
        <button type='submit' className='btn btn-square bg-sky-400 text-white'> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
        </button>
    </form>
  )
}

export default SearchInput