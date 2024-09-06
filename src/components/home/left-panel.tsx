import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ListFilter, Search } from "lucide-react";
import { Input } from "../ui/input";
import ThemeSwitch from "../theme-switch";
import Conversation from "../conversation";
import UserListDialog from "./UserListDialog";
import { UserButton } from "../ui/button"; // Corrected import
import { useEffect, useState } from "react";

// Define the type for Conversation
type Conversation = {
  _id: string; // assuming `_id` is a string
  // Add other properties of Conversation as needed
};

const LeftPanel: React.FC = () => {
  // Mocking the isAuthenticated and isLoading values
  const isAuthenticated = true; // Replace with actual logic when ready
  const isLoading = false;

  // State for conversations (typed as an array of Conversation objects)
  const [conversations, setConversations] = useState<Conversation[]>([]); // Replace with actual data when ready
  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);

  // Handle conversation change effect
  useEffect(() => {
    const conversationIds = conversations?.map((conversation) => conversation._id);
    if (selectedConversation && conversationIds && !conversationIds.includes(selectedConversation._id)) {
      setSelectedConversation(null);
    }
  }, [conversations, selectedConversation]);

  if (isLoading) return null;

  return (
    <div className='w-1/4 border-gray-600 border-r'>
      <div className='sticky top-0 bg-left-panel z-10'>
        {/* Header */}
        <div className='flex justify-between bg-gray-primary p-3 items-center'>
          <UserButton />

          <div className='flex items-center gap-3'>
            {isAuthenticated && <UserListDialog />}
            <ThemeSwitch />
          </div>
        </div>
        <div className='p-3 flex items-center'>
          {/* Search */}
          <div className='relative h-10 mx-3 flex-1'>
            <Search
              className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10'
              size={18}
            />
            <Input
              type='text'
              placeholder='Search or start a new chat'
              className='pl-10 py-2 text-sm w-full rounded shadow-sm bg-gray-primary focus-visible:ring-transparent'
            />
          </div>
          <ListFilter className='cursor-pointer' />
        </div>
      </div>

      {/* Chat List */}
      <div className='my-3 flex flex-col gap-0 max-h-[80%] overflow-auto'>
        {/* Conversations will go here */}
        {conversations?.map((conversation) => (
          <Conversation key={conversation._id} conversation={conversation} />
        ))}

        {conversations?.length === 0 && (
          <>
            <p className='text-center text-gray-500 text-sm mt-3'>No conversations yet</p>
            <p className='text-center text-gray-500 text-sm mt-3'>
              We understand {"you're"} an introvert, but {"you've"} got to start somewhere 😊
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LeftPanel;