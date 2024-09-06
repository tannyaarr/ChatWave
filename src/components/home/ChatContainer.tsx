// src/components/home/chat-container.tsx

"use client";
import { useState, useEffect } from 'react';
import LeftPanel from './left-panel';
import RightPanel from './right-panel';
import { Conversation } from '@/types'; // Import your Conversation type or interface

const ChatContainer = () => {
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);
  const [allConversations, setAllConversations] = useState<Conversation[]>([]);

  // Mock fetch function to simulate getting conversations
  useEffect(() => {
    // Fetch conversations from an API or some source
    const fetchConversations = async () => {
      // Simulate an API call
      const response = await fetch('/api/conversations'); // Adjust URL as needed
      const data: Conversation[] = await response.json();
      setAllConversations(data);
    };

    fetchConversations();
  }, []);

  // Handle the selection of a conversation
  const handleSelectConversation = (conversation: Conversation) => {
    setSelectedConversation(conversation);
  };

  return (
    <div className='flex'>
      <LeftPanel
        allConversations={allConversations}
        onSelectConversation={handleSelectConversation}
        allContacts={[]} // Provide this if needed; adjust as necessary
      />
      <RightPanel
        conversation={selectedConversation}
      />
    </div>
  );
};

export default ChatContainer;
