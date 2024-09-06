import React, { useMemo } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@radix-ui/react-avatar';
import { formatDate } from '../lib/utils';
import { MessageSeenSvg } from '../components/icons/MessageSeenSvg';
import { Users } from 'lucide-react';

type ConversationType = "private" | "group";

interface LastMessage {
    messageType: "text" | "image" | "video" | "audio" | "file";
    content: string;
    sender: string;
    _creationTime?: string;
}

interface Conversation {
    _id: string;
    name?: string;
    lastMessage?: LastMessage;
    type: ConversationType;
    groupName?: string;
    groupImage?: string;
    isOnline?: boolean;
    isGroup?: boolean;
    _creationTime?: string;
}

interface ConversationProps {
    conversation: Conversation;
    onClick: () => void;
}

const Conversation: React.FC<ConversationProps> = ({ conversation, onClick }) => {
    // Memoize conversationName and conversationImage to prevent unnecessary recalculations
    const conversationName = useMemo(() => conversation.groupName || "Private Chat", [conversation.groupName]);
    const conversationImage = useMemo(() => conversation.groupImage || "/placeholder.png", [conversation.groupImage]);

    const lastMessage = conversation.lastMessage;
    const lastMessageType = lastMessage?.messageType;
    const authUser = { _id: "user1" };

    return (
        <div
            className="flex gap-2 items-center p-3 hover:bg-chat-hover cursor-pointer"
            onClick={onClick}
        >
            <Avatar className="border border-gray-900 overflow-visible relative">
                {conversation.isOnline && (
                    <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-foreground" />
                )}
                <AvatarImage src={conversationImage} className="object-cover rounded-full" />
                <AvatarFallback>
                    <div className="animate-pulse bg-gray-tertiary w-full h-full rounded-full"></div>
                </AvatarFallback>
            </Avatar>
            <div className="w-full">
                <div className="flex items-center">
                    <h3 className="text-xs lg:text-sm font-medium">{conversationName}</h3>
                    <span className="text-[10px] lg:text-xs text-gray-500 ml-auto">
                        {formatDate(lastMessage?._creationTime || conversation._creationTime || new Date().toString())}
                    </span>
                </div>
                <p className="text-[12px] mt-1 text-gray-500 flex items-center gap-1">
                    {lastMessage?.sender === authUser?._id && <MessageSeenSvg />}
                    {conversation.isGroup && <Users size={16} />}
                    {!lastMessage && "Say Hi!"}
                    {lastMessageType === "text" && lastMessage?.content.length > 30 ? (
                        <span className="text-xs">{lastMessage.content.slice(0, 30)}...</span>
                    ) : lastMessageType === "text" ? (
                        <span className="text-xs">{lastMessage?.content}</span>
                    ) : lastMessageType === "image" ? (
                        <span className="text-xs text-gray-400">📸 Photo</span>
                    ) : lastMessageType === "video" ? (
                        <span className="text-xs text-gray-400">📹 Video</span>
                    ) : lastMessageType === "audio" ? (
                        <span className="text-xs text-gray-400">🎵 Audio</span>
                    ) : lastMessageType === "file" ? (
                        <span className="text-xs text-gray-400">📁 File</span>
                    ) : (
                        <span className="text-xs">{lastMessage?.content}</span>
                    )}
                </p>
            </div>
        </div>
    );
};

export default Conversation;
