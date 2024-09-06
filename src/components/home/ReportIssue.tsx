// src/components/home/ReportIssue.tsx

import React, { useState } from 'react';

const ReportIssue: React.FC = () => {
  const [issueDescription, setIssueDescription] = useState('');

  const handleSubmit = () => {
    // Logic to submit the issue (e.g., API call)
    console.log('Reported Issue:', issueDescription);
    setIssueDescription('');
  };

  return (
    <div className='p-4 bg-gray-100 rounded shadow'>
      <h2 className='text-xl font-bold mb-4 text-gray-800'>Report an Issue</h2>
      <textarea
        rows={4}
        value={issueDescription}
        onChange={(e) => setIssueDescription(e.target.value)}
        placeholder='Describe the issue...'
        className='p-2 border border-gray-300 rounded w-full'
      />
      <button
        onClick={handleSubmit}
        className='mt-2 bg-red-500 text-white p-2 rounded'
      >
        Submit
      </button>
    </div>
  );
};

export default ReportIssue;