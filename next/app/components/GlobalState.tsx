'use client'
import { createContext, useState, ReactNode } from 'react';

// Define a type for the context's value
type MyGlobalStateContextType = {
  username: string;
  setUsername: (username: string) => void;
};

// Create the context with initial default values as undefined (which you'll override when using the provider)
const MyGlobalStateContext = createContext<MyGlobalStateContextType>({
  username: '', // default username as empty string
  setUsername: () => {} // default setUsername as a no-op function
});

// Define props for the provider
type MyGlobalStateProviderProps = {
  children: ReactNode;
};

const MyGlobalStateProvider = ({ children }: MyGlobalStateProviderProps) => {
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
