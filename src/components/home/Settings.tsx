import React, { useState, useEffect } from 'react';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    username: '',
    email: '',
    password: '',
    privateChatNotifications: false,
    groupNotifications: false,
    profileVisibility: 'public',
    searchVisibility: false,
    dataSharing: false,
  });

  const [isEditing, setIsEditing] = useState<string | null>(null);

  useEffect(() => {
    // Fetch current settings
    fetch('/api/settings/1')  // Replace with actual user ID
      .then(response => response.json())
      .then(data => setSettings(data))
      .catch(error => console.error('Error fetching settings:', error));
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSave = () => {
    // Update settings
    fetch('/api/settings/1', {  // Replace with actual user ID
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(settings),
    })
      .then(() => {
        alert('Settings updated successfully');
        setIsEditing(null);
      })
      .catch(error => console.error('Error updating settings:', error));
  };

  return (
    <div className='p-4 bg-gray-200 rounded shadow'>
      <h2 className='text-xl font-bold mb-4 text-gray-900'>Settings</h2>
      <div className='space-y-4'>
        <div className='flex justify-between items-center'>
          <span className='font-medium text-customBlue'>Account Settings</span>
          <button className='text-customBlue hover:text-blue-700' onClick={() => setIsEditing('account')}>Edit</button>
        </div>
        {isEditing === 'account' && (
          <div className='p-4 border border-gray-300 rounded'>
            <input
              type='text'
              name='username'
              value={settings.username}
              onChange={handleInputChange}
              placeholder='Username'
              className='p-2 border border-gray-300 rounded mb-2 w-full'
            />
            <input
              type='email'
              name='email'
              value={settings.email}
              onChange={handleInputChange}
              placeholder='Email'
              className='p-2 border border-gray-300 rounded mb-2 w-full'
            />
            <input
              type='password'
              name='password'
              value={settings.password}
              onChange={handleInputChange}
              placeholder='New Password'
              className='p-2 border border-gray-300 rounded mb-2 w-full'
            />
            <button onClick={handleSave} className='bg-customBlue text-white p-2 rounded'>Save</button>
          </div>
        )}
        <div className='flex justify-between items-center'>
          <span className='font-medium text-customGreen'>Notification Preferences</span>
          <button className='text-customGreen hover:text-green-700' onClick={() => setIsEditing('notifications')}>Edit</button>
        </div>
        {isEditing === 'notifications' && (
          <div className='p-4 border border-gray-300 rounded'>
            <label className='flex items-center'>
              <input
                type='checkbox'
                name='privateChatNotifications'
                checked={settings.privateChatNotifications}
                onChange={handleInputChange}
                className='mr-2'
              />
              <span>Private Chat Notifications</span>
            </label>
            <label className='flex items-center'>
              <input
                type='checkbox'
                name='groupNotifications'
                checked={settings.groupNotifications}
                onChange={handleInputChange}
                className='mr-2'
              />
              <span>Group Notifications</span>
            </label>
            <button onClick={handleSave} className='bg-customGreen text-white p-2 rounded'>Save</button>
          </div>
        )}
        <div className='flex justify-between items-center'>
          <span className='font-medium text-customPurple'>Privacy Settings</span>
          <button className='text-customPurple hover:text-purple-700' onClick={() => setIsEditing('privacy')}>Edit</button>
        </div>
        {isEditing === 'privacy' && (
          <div className='p-4 border border-gray-300 rounded'>
            <label>
              <select
                name='profileVisibility'
                value={settings.profileVisibility}
                onChange={handleInputChange}
                className='p-2 border border-gray-300 rounded mb-2 w-full'
              >
                <option value='public'>Public</option>
                <option value='private'>Private</option>
                <option value='friends'>Friends</option>
              </select>
              Profile Visibility
            </label>
            <label className='flex items-center'>
              <input
                type='checkbox'
                name='searchVisibility'
                checked={settings.searchVisibility}
                onChange={handleInputChange}
                className='mr-2'
              />
              <span>Allow Search Visibility</span>
            </label>
            <label className='flex items-center'>
              <input
                type='checkbox'
                name='dataSharing'
                checked={settings.dataSharing}
                onChange={handleInputChange}
                className='mr-2'
              />
              <span>Allow Data Sharing</span>
            </label>
            <button onClick={handleSave} className='bg-customPurple text-white p-2 rounded'>Save</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;