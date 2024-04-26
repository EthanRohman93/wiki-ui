'use client'
import React, { useState, useContext } from 'react';
import { MyGlobalStateContext } from '../GlobalState'; // Adjust path as necessary

interface InputSubmitterProps {
  placeholder?: string;
  buttonText?: string;
}

const InputSubmitter = ({ placeholder = 'Enter username', buttonText = 'Explore Topics' }: InputSubmitterProps) => {
  const [inputValue, setInputValue] = useState('');
  const { setUsername } = useContext(MyGlobalStateContext); // Access setUsername from global state

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    // Set the global username to the new value
    setUsername(inputValue);
  };

  return (
    <div className="input-submitter">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={placeholder}
        className="text-input rounded-xl p-2 border"
      />
      <button onClick={handleSubmit} className="submit-button hover:font-bold hover:text-current p-2 rounded-xl">
        {buttonText}
      </button>
    </div>
  );
};

export default InputSubmitter;

