import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UserProvider } from './UserContext';
import { StoreProvider } from './Food/StoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <StoreProvider>
        <App />
      </StoreProvider>
    </UserProvider>
  </React.StrictMode>
);
