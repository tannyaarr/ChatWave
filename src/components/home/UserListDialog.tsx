import { useState, useMemo, useRef, useEffect } from 'react';
import { Input } from "../ui/input";
import { Search } from "lucide-react";

interface UserListDialogProps {
  isOpen: boolean;
  onClose: () => void;
  contacts?: { id: number; name: string; avatar?: string }[]; // Made optional
}

const UserListDialog = ({ isOpen, onClose, contacts = [] }: UserListDialogProps) => { // Default to empty array
  const [searchQuery, setSearchQuery] = useState('');
  const dialogRef = useRef<HTMLDivElement>(null);

  const filteredContacts = useMemo(() => {
    if (!searchQuery) return contacts;
    return contacts.filter(contact => {
      const name = contact.name ?? '';
      return typeof name === 'string' && name.toLowerCase().includes(searchQuery.toLowerCase());
    });
  }, [searchQuery, contacts]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50">
      <div
        ref={dialogRef}
        className="absolute top-6 left-[1%] w-[24.6%] h-[calc(100vh-1.5rem)] bg-left-panel rounded-lg shadow-lg"
      >
        <div className="p-4">
          <div className="flex items-center mb-4">
            <Search className="text-gray-500 mr-2" size={20} />
            <Input
              type="text"
              placeholder="Search contacts"
              className="w-full py-2 text-sm rounded border border-gray-300"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="max-h-[calc(100vh-10rem)] overflow-auto">
            {filteredContacts.length === 0 ? (
              <p className="text-center text-gray-500">No contacts found</p>
            ) : (
              filteredContacts.map(contact => (
                <div
                  key={contact.id}
                  className="flex items-center p-2 hover:bg-gray-700 cursor-pointer"
                >
                  {contact.avatar ? (
                    <img
                      src={contact.avatar}
                      alt={contact.name}
                      className="w-8 h-8 rounded-full mr-2"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-300 mr-2 flex items-center justify-center">
                      <span className="text-white">{contact.name.charAt(0)}</span>
                    </div>
                  )}
                  <span>{contact.name}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserListDialog;

