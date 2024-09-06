// src/components/chat-bubble.tsx

import React from 'react';

// Define the type for the message prop
interface Message {
  _id: string;
  conversationId: string;
  sender: string;
  content: string;
  _creationTime: string;
  messageType: string;
}

interface ChatBubbleProps {
  message: Message;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message }) => {
  return (
    <div className='chat-bubble'>
      <p>{message.content}</p>
      {/* Add more details or styling as needed */}
    </div>
  );
};

export default ChatBubble;