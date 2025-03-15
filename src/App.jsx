import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './routes';
import './App.css';
import { DestinationProvider } from './context/DestinationContext';

function App() {
  return (
    <DestinationProvider>
      <RouterProvider router={router} />
    </DestinationProvider>
  );
}

export default App;