import { useState } from "react";
import useConveration from "../zustand/useConversation";
import toast from "react-hot-toast";

const useSendMessage =() => {
    const [loading, setLoading] = useState(false);

    const {messages, setMessages, selectedConversation} = useConveration();

    const sendMessage = async (message) => {
        try {
            const res = await fetch(`api/messages/send/${selectedConversation._id}`, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify({message})
            })
            const data = await res.json;
            if(data.error) throw new Error(data.error);
            setMessages([...messages, data]);
        } catch(error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return {sendMessage, loading};
}

export default useSendMessage;