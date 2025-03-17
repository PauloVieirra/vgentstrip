import React, { createContext, useContext, useState, useEffect } from 'react';

const DestinationContext = createContext();

export const useDestination = () => {
  const context = useContext(DestinationContext);
  if (!context) {
    throw new Error('useDestination must be used within a DestinationProvider');
  }
  return context;
};

export const DestinationProvider = ({ children }) => {
  const [selectedDestination, setSelectedDestination] = useState(() => {
    const savedDestination = localStorage.getItem('selectedDestination');
    return savedDestination ? JSON.parse(savedDestination) : null;
  });

  useEffect(() => {
    if (selectedDestination) {
      localStorage.setItem('selectedDestination', JSON.stringify(selectedDestination));
    } else {
      localStorage.removeItem('selectedDestination');
    }
  }, [selectedDestination]);

  const clearDestination = () => {
    setSelectedDestination(null);
  };

  const updateDestination = (destination) => {
    clearDestination();
    setSelectedDestination(destination);
  };

  return (
    <DestinationContext.Provider
      value={{
        selectedDestination,
        updateDestination,
        clearDestination
      }}
    >
      {children}
    </DestinationContext.Provider>
  );
};