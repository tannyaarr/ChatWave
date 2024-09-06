// src/components/home/SendFeedback.tsx

import React, { useState } from 'react';

const SendFeedback: React.FC = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = () => {
    // Logic to submit the feedback (e.g., API call)
    console.log('Feedback Submitted:', feedback);
    setFeedback('');
  };

  return (
    <div className='p-4 bg-gray-100 rounded shadow'>
      <h2 className='text-xl font-bold mb-4 text-gray-800'>Send Feedback</h2>
      <textarea
        rows={4}
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
        placeholder='Your feedback...'
        className='p-2 border border-gray-300 rounded w-full'
      />
      <button
        onClick={handleSubmit}
        className='mt-2 bg-blue-500 text-white p-2 rounded'
      >
        Submit
      </button>
    </div>
  );
};

export default SendFeedback;