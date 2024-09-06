// src/types/index.ts

export interface Conversation {
  _id: string;
  groupName?: string;
  groupImage?: string;
  lastMessage?: {
    content: string;
    _creationTime: string;
    messageType: 'text'; 
    sender: string;
  };
  isOnline?: boolean; 
  isGroup: boolean;
  _creationTime?: string;
}
