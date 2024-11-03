import { useState } from "react"
import useConveration from "../zustand/useConversation";
import { useEffect } from "react";
import toast from "react-hot-toast";

const useGetMessages = () => {
  const [loading, setLoading] = useState();
  const {messages, setMessages, selectedConversation} = useConveration();

  useEffect(() => {
    const getMessages = async () => {
        setLoading(true);
        try {
            const res = await fetch(`/api/messages/${selectedConversation._id}`);
            const data = await res.json();
            if(data.error) throw new Error(data.error);
            setMessages(data);
        } catch(error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    if(selectedConversation?._id) getMessages();
  },[selectedConversation?._id, setMessages])

  return {messages, loading};

}

export default useGetMessages