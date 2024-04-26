'use client'
import { createContext, useState } from 'react';

const MyGlobalStateContext = createContext();

const MyGlobalStateProvider = ({ children }) => {
  const [username, setUsername] = useState('');

  const value = { username, setUsername };

  return (
    <MyGlobalStateContext.Provider value={value}>
      {children}
    </MyGlobalStateContext.Provider>
  );
};

export { MyGlobalStateContext, MyGlobalStateProvider };
