import React from 'react';
import ReactDOM from 'react-dom/client';
import { CacheContextProvider } from './contexts/CacheContext';
import SearchPage from './pages/SearchPage';
import GlobalStyle from './style';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <CacheContextProvider>
      <SearchPage />
    </CacheContextProvider>
  </React.StrictMode>,
);
