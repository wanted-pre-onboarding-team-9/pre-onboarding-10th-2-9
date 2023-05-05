import { useEffect, useState } from 'react';
import { DEBOUNCE_DELAY_IN_MS, KEYBOARD, START_ACTIVE_INDEX } from '../utils/const';
import { calcActiveIndex } from '../utils/keyboard';
import { useSuggestions, useSuggestionsDispatch } from '../contexts/SuggestionsContext';
import useDebounce from '../hooks/useDebounce';
import useClickOutside from '../hooks/useClickOutside';
import useBoolean from '../hooks/useBoolean';
import Dropdown from '../components/Dropdown';
import Title from '../components/Title';
import SearchInput from '../components/SearchInput';
import * as S from './style';

const Search = () => {
  const {
    value: isDropdownOpen,
    setFalse: closeDropdown,
    setTrue: openDropdown,
  } = useBoolean(false);
  const { ref } = useClickOutside<HTMLDivElement>(closeDropdown);

  const [displayedKeyword, setDisplayedKeyword] = useState('');
  const debouncedKeyword = useDebounce<string>(displayedKeyword.trim(), DEBOUNCE_DELAY_IN_MS);
  const [activeIndex, setActiveIndex] = useState(START_ACTIVE_INDEX);

  const suggestions = useSuggestions();
  const { changeKeyword, clearSuggestions } = useSuggestionsDispatch();

  const onChangeDisplayedKeyword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setDisplayedKeyword(value);
    setActiveIndex(START_ACTIVE_INDEX);
    if (value.trim() === '') {
      clearSuggestions();
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;

    switch (e.key) {
      case KEYBOARD.ENTER:
        if (activeIndex < 0) break;
        setDisplayedKeyword(suggestions[activeIndex].name);
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
    changeKeyword(debouncedKeyword);
  }, [debouncedKeyword]);

  return (
    <S.SearchContainer>
      <Title />
      <S.SearchBar ref={ref}>
        <SearchInput
          value={displayedKeyword}
          onChange={onChangeDisplayedKeyword}
          onKeyDown={onKeyDown}
          onFocus={openDropdown}
        />
        <Dropdown
          isOpen={isDropdownOpen}
          keyword={displayedKeyword}
          setKeyword={setDisplayedKeyword}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
      </S.SearchBar>
    </S.SearchContainer>
  );
};

export default Search;
