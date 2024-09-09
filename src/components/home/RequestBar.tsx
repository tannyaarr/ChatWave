import React, { useState, useEffect } from 'react';

// Define request type
interface Request {
  _id: string;
  requesterName: string;
  requesterAvatar: string;
}

const RequestBar: React.FC = () => {
  // State for chat requests
  const [requests, setRequests] = useState<Request[]>([]);

  // Fetch chat requests from backend (mocked for now)
  useEffect(() => {
    // Mock request data
    const fetchRequests = async () => {
      const mockRequests = [
        { _id: '1', requesterName: 'Alice', requesterAvatar: '/alice.jpg' },
        { _id: '2', requesterName: 'Bob', requesterAvatar: '/bob.jpg' }
      ];
      setRequests(mockRequests);
    };

    fetchRequests();
  }, []);

  // Handle accepting request
  const handleAccept = async (requestId: string) => {
    // Call backend to accept the request
    console.log(`Accepting request: ${requestId}`);
    // Remove the accepted request from the list
    setRequests(requests.filter(request => request._id !== requestId));
  };

  // Handle rejecting request
  const handleReject = async (requestId: string) => {
    // Call backend to reject the request
    console.log(`Rejecting request: ${requestId}`);
    // Remove the rejected request from the list
    setRequests(requests.filter(request => request._id !== requestId));
  };

  return (
    <div className="request-bar p-3">
      <h3 className="font-semibold text-lg">Chat Requests</h3>
      {requests.length === 0 ? (
        <p className="text-sm text-gray-500">No new requests</p>
      ) : (
        <ul>
          {requests.map(request => (
            <li key={request._id} className="flex items-center gap-3 mb-2">
              <img src={request.requesterAvatar} alt="Avatar" className="w-8 h-8 rounded-full" />
              <span className="font-medium">{request.requesterName}</span>
              <button
                className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                onClick={() => handleAccept(request._id)}
              >
                Accept
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                onClick={() => handleReject(request._id)}
              >
                Reject
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RequestBar;