import { useEffect, useState } from 'react';

import * as S from './style';

import { getSearchData } from '../api/searchAPI';

import { keydownHandler } from '../utils/keydownHandler';

import { RecommendedKeywords } from '../@types/search';

import Title from '../components/Title';
import SearchField from '../components/SearchField';
import Dropdown from '../components/Dropdown';

import useDebounce from '../hooks/useDebounce';

const Search = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [recommendedKeywords, setRecommendedSearchKeywords] = useState<RecommendedKeywords[]>([
    { name: '', id: 0 },
  ]);
  const [activeNumber, setActiveNumber] = useState(0);

  const debouncedSearchKeyword: string = useDebounce<string>(keyword, 500);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const changeInputText = (selectedText: string) => {
    setKeyword(selectedText);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    keydownHandler({
      e,
      activeNumber,
      setActiveNumber,
      recommendedKeywords,
      changeInputText,
    });
  };

  const onSearchChange = async () => {
    if (keyword.length > 0) {
      const searchData = await getSearchData(debouncedSearchKeyword);
      setRecommendedSearchKeywords(searchData);
      return;
    }
    setActiveNumber(0);
  };

  useEffect(() => {
    onSearchChange();
  }, [debouncedSearchKeyword]);

  return (
    <S.SearchContainer>
      <Title />
      <SearchField
        toggleDropdown={toggleDropdown}
        onKeywordChange={onKeywordChange}
        keyword={keyword}
        handleKeyDown={handleKeyDown}
      />
      {(isDropdownOpen || keyword) && (
        <Dropdown
          keyword={keyword}
          activeNumber={activeNumber}
          recommendedKeywords={recommendedKeywords}
        />
      )}
    </S.SearchContainer>
  );
};

export default Search;
