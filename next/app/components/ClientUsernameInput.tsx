'use client'
import React, { useState, useContext } from 'react';
import { MyGlobalStateContext } from './GlobalState';
import { useRouter } from 'next/navigation';

const ClientUsernameInput = () => {
    const [inputValue, setInputValue] = useState('');
    const globalState = useContext(MyGlobalStateContext);
    const router = useRouter()

    if (!globalState) {
        throw new Error("ClientUsernameInput must be used within a MyGlobalStateProvider");
    }

    const { setUsername } = globalState;

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = () => {
        setUsername(inputValue);
        console.log('Username set to:', inputValue);
        router.push('/topics');
    };

    return (
        <div className="client-username-input flex flex-col">
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Username..."
                className="flex-1 justify-center text-input rounded-xl home-input-style"
            />
            <button onClick={handleSubmit} className="flex-1 justify-center rounded-xl home-button-style">
                Submit Username
            </button>
        </div>
    );
};

export default ClientUsernameInput;

