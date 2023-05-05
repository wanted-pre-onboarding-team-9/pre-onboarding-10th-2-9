import React from 'react';
import ReactDOM from 'react-dom/client';
import Cache from './utils/cache';
import { SearchContextProvider } from './contexts/SearchContext';
import SearchPage from './pages/SearchPage';
import GlobalStyle from './style';

const SuggestionsCache = new Cache();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <SearchContextProvider cache={SuggestionsCache}>
      <SearchPage />
    </SearchContextProvider>
  </React.StrictMode>,
);
