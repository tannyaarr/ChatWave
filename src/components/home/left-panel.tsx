import * as React from "react";
import { ListFilter, Search } from "lucide-react";
import { Input } from "../ui/input";
import ThemeSwitch from "../theme-switch";
import Conversation from "../conversation";
import UserListDialog from "./UserListDialog";
import { UserButton } from "../ui/button";
import { useEffect, useState } from "react";

type Conversation = {
  _id: string;
  name: string;
  isActive: boolean;
  type: "personal" | "group"; // Add the type of conversation
};

const LeftPanel: React.FC = () => {
  const isAuthenticated = true;
  const isLoading = false;

  // State for conversations
  const [conversations, setConversations] = useState<Conversation[]>([
    { _id: "1", name: "John Doe", isActive: true, type: "personal" },
    { _id: "2", name: "Jane Smith", isActive: false, type: "personal" },
    { _id: "3", name: "Team Alpha", isActive: true, type: "group" },
    { _id: "4", name: "Project Beta", isActive: false, type: "group" },
  ]);

  const [selectedConversation, setSelectedConversation] = useState<Conversation | null>(null);

  // State for filter dropdown visibility and filter type
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Toggle filter dropdown
  const toggleFilter = () => setIsFilterOpen(!isFilterOpen);

  // Handle filter selection
  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter);
    setIsFilterOpen(false);
  };

  // Apply filter to conversations
  const filteredConversations = activeFilter
    ? conversations.filter((conversation) => {
        if (activeFilter === "personal") return conversation.type === "personal";
        if (activeFilter === "group") return conversation.type === "group";
        if (activeFilter === "active") return conversation.isActive;
        return true; // Show all conversations by default
      })
    : conversations;

  // Ensure selectedConversation is in the filtered list
  useEffect(() => {
    const conversationIds = filteredConversations?.map((conversation) => conversation._id);
    if (selectedConversation && conversationIds && !conversationIds.includes(selectedConversation._id)) {
      setSelectedConversation(null);
    }
  }, [filteredConversations, selectedConversation]);

  if (isLoading) return null;

  return (
    <div className="w-1/4 border-gray-600 border-r">
      <div className="sticky top-0 bg-left-panel z-10">
        {/* Header */}
        <div className="flex justify-between bg-gray-primary p-3 items-center">
          <UserButton />
          <div className="flex items-center gap-3">
            {isAuthenticated && <UserListDialog />}
            <ThemeSwitch />
          </div>
        </div>

        {/* Search and Filter */}
        <div className="p-3 flex items-center relative">
          {/* Search */}
          <div className="relative h-10 mx-3 flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10"
              size={18}
            />
            <Input
              type="text"
              placeholder="Search or start a new chat"
              className="pl-10 py-2 text-sm w-full rounded shadow-sm bg-gray-primary focus-visible:ring-transparent"
            />
          </div>

          {/* Filter Icon */}
          <ListFilter className="cursor-pointer" onClick={toggleFilter} />

          {/* Filter Dropdown */}
          {isFilterOpen && (
            <div className="absolute top-12 right-3 bg-white shadow-lg rounded border border-gray-200 p-2">
              <div
                className="cursor-pointer hover:bg-gray-100 px-3 py-2"
                onClick={() => handleFilterChange("personal")}
              >
                Personal Chat (6)
              </div>
              <div
                className="cursor-pointer hover:bg-gray-100 px-3 py-2"
                onClick={() => handleFilterChange("group")}
              >
                Group Chat (3)
              </div>
              <div
                className="cursor-pointer hover:bg-gray-100 px-3 py-2"
                onClick={() => handleFilterChange("active")}
              >
                Active Conversations
              </div>
              <div
                className="cursor-pointer hover:bg-gray-100 px-3 py-2"
                onClick={() => handleFilterChange(null)}
              >
                All Conversations
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Chat List */}
      <div className="my-3 flex flex-col gap-0 max-h-[80%] overflow-auto">
        {filteredConversations.map((conversation) => (
          <Conversation key={conversation._id} conversation={conversation} />
        ))}

        {filteredConversations.length === 0 && (
          <>
            <p className="text-center text-gray-500 text-sm mt-3">No conversations found</p>
            <p className="text-center text-gray-500 text-sm mt-3">
              We understand {"you're"} an introvert, but {"you've"} got to start somewhere 😊
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LeftPanel;
