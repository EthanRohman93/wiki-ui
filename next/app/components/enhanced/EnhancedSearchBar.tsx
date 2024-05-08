'use client'
import React, { useState } from 'react';

interface Props {
  onSearch: (query: string) => void;
}

const EnhancedSearchBar = ({ onSearch }: Props) => {
  const [input, setInput] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className='flex-1'>
      <input
        type="text"
        className='p-1 bg-gray-500 outline-none w-full border-2 rounded-xl'
        value={input}
        onChange={handleInputChange}
        placeholder="Search topics..."
        aria-label="Search topics"
      />
    </div>
  );
};

export default EnhancedSearchBar;
