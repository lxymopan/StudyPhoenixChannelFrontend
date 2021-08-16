import React from 'react';
import './App.css';
import Count from './Count';
import { SocketProvider } from 'use-phoenix-channel';

function App() {
  return (
    <div className="App">
        <SocketProvider wsUrl ="ws://localhost:4000/socket" options={{}}>
          <Count></Count>
        </SocketProvider>
    </div>
  );
}

export default App;
