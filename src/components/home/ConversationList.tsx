// src/components/ConversationList.tsx
import React from 'react';
import { conversations } from '../dummy-data/db'; // Adjust path as needed

const ConversationList: React.FC = () => {
  return (
    <div>
      {conversations.map((conversation) => (
        <div key={conversation._id}>
          <h3>{conversation.groupName}</h3>
          <p>{conversation.lastMessage.content}</p>
        </div>
      ))}
    </div>
  );
};

export default ConversationList;