import { useEffect, useState } from 'react';
import { getSearchData } from '../api/searchAPI';
import { Suggestion } from '../@types/search';
import {
  DEBOUNCE_DELAY_IN_MS,
  KEYBOARD,
  MAX_DISPLAY_NUM,
  START_ACTIVE_INDEX,
} from '../utils/const';
import { calcActiveIndex } from '../utils/keyboard';
import { useCache, useCacheDispatch } from '../contexts/CacheContext';
import useDebounce from '../hooks/useDebounce';
import useClickOutside from '../hooks/useClickOutside';
import Dropdown from '../components/Dropdown';
import Title from '../components/Title';
import SearchInput from '../components/SearchInput';
import * as S from './style';

const Search = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { ref } = useClickOutside<HTMLDivElement>(() => setIsDropdownOpen(false));

  const [keyword, setKeyword] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [activeIndex, setActiveIndex] = useState(START_ACTIVE_INDEX);

  const debouncedSearchKeyword = useDebounce<string>(keyword.trim(), DEBOUNCE_DELAY_IN_MS);
  const cachedData = useCache<Suggestion[]>(debouncedSearchKeyword);
  const cacheDispatch = useCacheDispatch();

  const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setKeyword(value);
    setActiveIndex(START_ACTIVE_INDEX);
    if (value.trim() === '') {
      setSuggestions([]);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;

    switch (e.key) {
      case KEYBOARD.ENTER:
        if (activeIndex < 0) break;
        setKeyword(suggestions[activeIndex].name);
        setActiveIndex(START_ACTIVE_INDEX);
        break;

      case KEYBOARD.ARROW_DOWN:
      case KEYBOARD.ARROW_UP:
        e.preventDefault();
        if (suggestions.length !== 0) {
          setActiveIndex(calcActiveIndex(e.key, activeIndex, suggestions.length - 1));
        }
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (debouncedSearchKeyword === '') return;

    if (cachedData) {
      setSuggestions(cachedData);
    } else {
      const onSearchChange = async () => {
        const searchData = await getSearchData(debouncedSearchKeyword);
        const slicedSearchData = searchData.slice(0, MAX_DISPLAY_NUM);
        setSuggestions(slicedSearchData);
        cacheDispatch({
          type: 'SET',
          payload: { key: debouncedSearchKeyword, data: slicedSearchData },
        });
      };
      onSearchChange();
    }
  }, [debouncedSearchKeyword]);

  return (
    <S.SearchContainer>
      <Title />
      <S.SearchBar ref={ref}>
        <SearchInput
          value={keyword}
          onChange={onKeywordChange}
          onKeyDown={onKeyDown}
          onFocus={() => setIsDropdownOpen(true)}
        />
        <Dropdown
          isOpen={isDropdownOpen}
          keyword={keyword}
          setKeyword={setKeyword}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          suggestions={suggestions}
        />
      </S.SearchBar>
    </S.SearchContainer>
  );
};

export default Search;
