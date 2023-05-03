import { useState } from 'react';

import Title from '../components/Title';
import SearchBar from '../components/SearchBar';
import RelatedKeywordsList from '../components/RelatedKeywordsList';

import useDebounce from '../hooks/useDebounce';
import useFetchRelatedKeywords from '../hooks/useFetchRelatedKeywords';

import keyDownEventProcessor from '../utils/keyDownEventProcessor';

import { FocusedState } from '../@types/types';

const initialFocusedState = { isFirstMoving: true, focusedIndex: -1 };

const SearchPage = () => {
  const [inputText, setInputText] = useState<string>('');
  const [focusedState, setFocusedState] = useState<FocusedState>(initialFocusedState);

  const debouncedValue = useDebounce(inputText, 300);
  const { isError, relatedKeywords } = useFetchRelatedKeywords(debouncedValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInputText(value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;

    if (!relatedKeywords.length) {
      return;
    }

    if (key === 'ArrowDown' || key === 'ArrowUp') {
      const processedFocusedState = keyDownEventProcessor(key, focusedState, relatedKeywords);

      setFocusedState(processedFocusedState);
      return;
    }

    setFocusedState(initialFocusedState);
  };

  return (
    <div>
      <Title />
      <SearchBar inputText={inputText} onChange={handleChange} onKeyPress={handleKeyPress} />
      {isError ? null : (
        <RelatedKeywordsList relatedKeywords={relatedKeywords} focusedState={focusedState} />
      )}
    </div>
  );
};

export default SearchPage;
