import { CacheContextProvider } from './contexts/CacheContext';
import SearchPage from './pages/SearchPage';
import GlobalStyle from './style';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <CacheContextProvider>
        <SearchPage />
      </CacheContextProvider>
    </>
  );
};

export default App;
