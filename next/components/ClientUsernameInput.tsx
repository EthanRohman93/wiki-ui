'use client'
import React, { useState, useContext } from 'react';
import { MyGlobalStateContext } from '@/components/GlobalState'; // Ensure correct path

const ClientUsernameInput = () => {
    const [inputValue, setInputValue] = useState('');
    const globalState = useContext(MyGlobalStateContext);

    if (!globalState) {
        throw new Error("ClientUsernameInput must be used within a MyGlobalStateProvider");
    }

    const { setUsername } = globalState;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        setUsername(inputValue); // Update the global state
        console.log('Username set to:', inputValue); // Optionally log the username to the console
    };

    return (
        <div className="client-username-input">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Enter Username"
                className="text-input mb-4 p-2 border rounded"
            />
            <button onClick={handleSubmit} className="submit-button p-2 rounded hover:bg-gray-100">
                Submit Username
            </button>
        </div>
    );
};

export default ClientUsernameInput;

