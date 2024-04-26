'use client'
import React, { useContext, useEffect } from 'react';
import { MyGlobalStateContext } from '@/components/GlobalState'; // Ensure the path is correct

const GlobalStateLogger = () => {
  const globalState = useContext(MyGlobalStateContext);

  useEffect(() => {
    if (globalState) {
      console.log("Current username in global state:", globalState.username);
    } else {
      console.log("Global state is not available.");
    }
  }, [globalState]);

  return null; // This component does not render anything
};

export default GlobalStateLogger;

