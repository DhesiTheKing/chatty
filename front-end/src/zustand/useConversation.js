import {create} from 'zustand'

const useConversations = create((set)=>({
    selectedConversations:null,
    setSelectedConversations:(selectedConversations) => set({selectedConversations}),
    messages:[],
    setMessages:(messages)=> set({messages}),
}))

export default useConversations;