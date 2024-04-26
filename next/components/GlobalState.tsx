'use client'
import { createContext, useState, ReactNode, FC } from 'react';

// Define a type for the context's value
type MyGlobalStateContextType = {
  username: string;
  setUsername: (username: string) => void;
};

// Create the context with initial default values as undefined (which you'll override when using the provider)
const MyGlobalStateContext = createContext<MyGlobalStateContextType | undefined>(undefined);

// Define props for the provider
type MyGlobalStateProviderProps = {
  children: ReactNode;
};

const MyGlobalStateProvider: FC<MyGlobalStateProviderProps> = ({ children }) => {
  const [username, setUsername] = useState('');

  // This is the value that will be available to all consuming components
  const value: MyGlobalStateContextType = { username, setUsername };

  return (
    <MyGlobalStateContext.Provider value={value}>
      {children}
    </MyGlobalStateContext.Provider>
  );
};

export { MyGlobalStateContext, MyGlobalStateProvider };
