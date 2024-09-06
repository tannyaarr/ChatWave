// src/dummy-data/db.ts

export const conversations = [
  {
    _id: "1",
    groupName: "Work",
    groupImage: "/avatar5.jpeg",
    lastMessage: {
      content: "Can you send me the report?",
      _creationTime: new Date().toISOString(),
      messageType: "text",
      sender: "user1",
    },
    isOnline: true,
    isGroup: true,
    _creationTime: new Date().toISOString(),
  },
  {
    _id: "2",
    groupName: "Family",
    groupImage: "/avatar6.png",
    lastMessage: {
      content: "Don't forget to call Mom!",
      _creationTime: new Date().toISOString(),
      messageType: "text",
      sender: "user2",
    },
    isOnline: false,
    isGroup: true,
    _creationTime: new Date().toISOString(),
  },
  // Add more conversations if needed
];

// Add messages data
export const messages = [
  {
    _id: "1",
    conversationId: "1",
    sender: "user1",
    content: "Can you send me the report?",
    _creationTime: new Date().toISOString(),
    messageType: "text",
  },
  {
    _id: "2",
    conversationId: "1",
    sender: "user2",
    content: "Sure, I'll send it by end of day.",
    _creationTime: new Date().toISOString(),
    messageType: "text",
  },
  // Add more messages if needed
];