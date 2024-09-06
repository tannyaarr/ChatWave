// src/components/home/right-panel.tsx

"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Video, X } from "lucide-react";
import MessageInput from "./message-input";
import MessageContainer from "./message-container";
import ChatPlaceHolder from "./chat-placeholder";
import { Conversation } from '@/types'; // Import your Conversation type

interface RightPanelProps {
  conversation: Conversation | null;
}

const RightPanel: React.FC<RightPanelProps> = ({ conversation }) => {
  if (!conversation) return <ChatPlaceHolder />;

  const conversationName = conversation.groupName ?? 'Unknown'; // Default to 'Unknown' if groupName is not available

  return (
    <div className='w-3/4 flex flex-col'>
      <div className='p-3 flex items-center bg-gray-200'>
        <div className='flex-1 flex items-center'>
          <Avatar className='w-10 h-10'>
            <AvatarImage src={conversation.groupImage ?? '/default-avatar.png'} alt={conversationName} />
            <AvatarFallback>{conversationName[0]}</AvatarFallback>
          </Avatar>
          <span className='ml-3 text-lg font-medium'>{conversationName}</span>
        </div>
        <div className='flex gap-2'>
          <Video size={20} />
          <X size={20} />
        </div>
      </div>
      <MessageContainer conversation={conversation} />
      <MessageInput />
    </div>
  );
};

export default RightPanel;
