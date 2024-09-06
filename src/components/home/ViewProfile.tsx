import React from 'react';

interface User {
  avatar: string;
  name: string;
  email: string;
  phone: string;
  bio: string;
  twitter: string;
  linkedin: string;
}

interface ViewProfileProps {
  user: User;
}

const ViewProfile: React.FC<ViewProfileProps> = ({ user }) => {
  return (
    <div className='flex flex-col w-full h-full bg-gray-200 p-4'>
      <div className='flex flex-col items-center'>
        <img src={user.avatar} alt='Profile' className='w-24 h-24 rounded-full border-4 border-gray-300 mb-4' />
        <h2 className='text-2xl font-semibold mb-2'>{user.name}</h2>
        <p className='text-gray-700'>{user.bio}</p>
      </div>
      <div className='mt-6'>
        <div className='mb-2'>
          <strong>Email:</strong> {user.email}
        </div>
        <div className='mb-2'>
          <strong>Phone:</strong> {user.phone}
        </div>
        <div className='flex gap-4 mt-4'>
          <a href={user.twitter} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
            Twitter
          </a>
          <a href={user.linkedin} target='_blank' rel='noopener noreferrer' className='text-blue-500 hover:underline'>
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
                                          
  