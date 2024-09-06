// src/pages/HomePage.tsx
import React from 'react';
import LeftPanel from '@/components/home/left-panel'; // Adjust path as needed
import { conversations } from '../dummy-data/db'; // Adjust path as needed
import { Conversation } from '@/types'; // Ensure this path is correct

const HomePage: React.FC = () => {
  const handleSelectConversation = (conversation: Conversation) => {
    // Handle conversation selection here
    console.log(`Selected conversation:`, conversation);
  };

  return (
    <main className="flex">
      <LeftPanel
        conversations={conversations} // Ensure this is an array
        onSelectConversation={handleSelectConversation}
      />
      {/* Add RightPanel or other components here */}
    </main>
  );
};

export default HomePage;
