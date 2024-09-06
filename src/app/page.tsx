// src/app/page.tsx

"use client";

import LeftPanel from '../components/home/left-panel';
import RightPanel from '../components/home/right-panel';
import { useState } from 'react';

// Example Conversation type definition
interface Conversation {
  _id: string;
  name?: string;
  groupName?: string;
  lastMessage: string;
  type: 'group' | 'private';
  groupImage?: string;
}

export default function Home() {
  // Example function for handling conversation selection
  const handleSelectConversation = (conversation: Conversation) => {
    console.log('Selected conversation:', conversation);
  };

  return (
    <main className='m-5'>
      <div className='flex overflow-y-hidden h-[calc(100vh-50px)] max-w-[1700px] mx-auto bg-left-panel'>
        {/* Green background decorator for Light Mode */}
        <div className='fixed top-0 left-0 w-full h-36 bg-green-primary dark:bg-transparent -z-30' />
        <LeftPanel onSelectConversation={handleSelectConversation} />
        <RightPanel />
      </div>
    </main>
  );
}

