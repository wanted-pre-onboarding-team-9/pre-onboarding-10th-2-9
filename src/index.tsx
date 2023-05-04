import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchPage from './pages/SearchPage';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <SearchPage />
  </React.StrictMode>,
);
