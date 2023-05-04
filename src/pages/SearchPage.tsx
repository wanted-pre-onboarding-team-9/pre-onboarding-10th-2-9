import { useState } from 'react';

import Title from '../components/Title';
import SearchBar from '../components/SearchBar';
import RecommendedKeywordsList from '../components/RecommendedKeywordsList';

import useDebounce from '../hooks/useDebounce';
import useFetchRecommendedKeywords from '../hooks/useFetchRecommendedKeywords';

import keyDownEventProcessor from '../utils/keyDownEventProcessor';

import { FocusedState } from '../@types/types';

const initialState = { isFirstMoving: true, focusedIndex: -1 };

const SearchPage = () => {
  const [inputText, setInputText] = useState<string>('');
  const [focusedState, setFocusedState] = useState<FocusedState>(initialState);

  const debouncedValue = useDebounce(inputText, 300);
  const { isError, recommendedKeywords } = useFetchRecommendedKeywords(debouncedValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInputText(value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;

    if (!recommendedKeywords.length) {
      return;
    }

    if (key === 'ArrowDown' || key === 'ArrowUp') {
      const processedState = keyDownEventProcessor(key, focusedState, recommendedKeywords);
      setFocusedState(processedState);
      return;
    }

    setFocusedState(initialState);
  };

  return (
    <div>
      <Title />
      <SearchBar inputText={inputText} onChange={handleChange} onKeyPress={handleKeyPress} />
      {isError ? null : (
        <RecommendedKeywordsList
          recommendedKeywords={recommendedKeywords}
          focusedState={focusedState}
        />
      )}
    </div>
  );
};

export default SearchPage;
