/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useContext, useState } from 'react';
import SearchPage from './pages/SearchPage';
import { RecommendedKeywords } from './@types/search';

export const CacheDataContext = createContext<any>(undefined);
export const CacheDataContextProvider = ({ children }: any) => {
  const [searchCacheData, setSearchCacheData] = useState<RecommendedKeywords[]>([]);

  const value = {
    searchCacheData,
    setSearchCacheData,
  };

  return <CacheDataContext.Provider value={value}>{children}</CacheDataContext.Provider>;
};

export const useCacheDataContext = () => {
  return useContext(CacheDataContext);
};

const App = () => {
  return (
    <div>
      <CacheDataContextProvider>
        <SearchPage />
      </CacheDataContextProvider>
    </div>
  );
};

export default App;
