import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReciverSocketId, io } from "../socket/socket.js";

export const sendMessage = async (req,res) => {
    try {
        const {message} = req.body;
        const {id:reciverId} = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants:{$all:[senderId,reciverId]}
        })

        if(!conversation){
            conversation = await Conversation.create({
                participants:[senderId,reciverId]
            })
        }

        const newMessage = new Message({
            senderId,
            reciverId,
            message
        })

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        await Promise.all([conversation.save(),newMessage.save()]);

        //Socket IO here

        const reciverSocketId = getReciverSocketId(reciverId);
        if(reciverId){
            io.to(reciverSocketId).emit("newMessage",newMessage);
        }

        res.status(200).json(newMessage);

    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }
}

export const getMessage = async (req,res) => {
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        

        const conversation = await Conversation.findOne({
            participants:{$all :[senderId,userToChatId]}
        }).populate("messages");

        if(!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        res.status(200).json(messages);

        
    } catch (error) {
        res.status(500).json({error:"Internal server error"})
    }
}