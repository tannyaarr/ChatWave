// src/pages/HomePage.tsx
import React from 'react';
import LeftPanel from '@/components/home/LeftPanel'; // Adjust path as needed
import { conversations } from '../dummy-data/db'; // Adjust path as needed

const HomePage: React.FC = () => {
  const handleSelectConversation = (conversationId: string) => {
    // Handle conversation selection here
    console.log(`Selected conversation ID: ${conversationId}`);
  };

  return (
    <main className="flex">
      <LeftPanel
        onSelectConversation={handleSelectConversation}
        allConversations={conversations} // Ensure this is an array
        allContacts={[]} // Provide an empty array or actual contacts if available
      />
      {/* Add RightPanel or other components here */}
    </main>
  );
};

export default HomePage;