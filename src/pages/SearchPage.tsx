import { useEffect, useState } from 'react';

import { RecommendedKeywords } from '../@types/search';
import { getSearchData } from '../api/searchAPI';
import Dropdown from '../components/Dropdown';
import Guidance from '../components/Guidance';
import SearchBar from '../components/SearchBar';
import * as S from '../components/style';
import useDebounce from '../hooks/useDebounce';
import useDropdown from '../hooks/useDropdown';

const Search = () => {
  const MAX_REC_NUM = 8;
  const [keyword, setKeyword] = useState<string>('');
  const [recommendedKeywords, setRecommendedSearchKeywords] = useState<RecommendedKeywords[]>([]);
  const [activeNumber, setActiveNumber] = useState(0);

  const { isDropdownOpen, searchBarRef, dropdownRef, handleSearchBarClick } = useDropdown();
  const debouncedSearchKeyword: string = useDebounce<string>(keyword.trim(), 500);

  const onSearchChange = async () => {
    if (debouncedSearchKeyword) {
      const searchData = (await getSearchData(debouncedSearchKeyword)).slice(0, MAX_REC_NUM + 1);
      setRecommendedSearchKeywords(searchData);
    }
  };
  const modifyKeyword = (newKeyword: string) => {
    setKeyword(newKeyword);
  };
  const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    onSearchChange();
    setActiveNumber(0);
  }, [debouncedSearchKeyword]);

  return (
    <S.SearchContainer>
      <Guidance />
      <SearchBar
        searchBarRef={searchBarRef}
        handleSearchBarClick={handleSearchBarClick}
        onKeywordChange={onKeywordChange}
        keyword={keyword}
        activeNumber={activeNumber}
        setActiveNumber={setActiveNumber}
        recommendedKeywords={recommendedKeywords}
        modifyKeyword={modifyKeyword}
      />
      {isDropdownOpen && (
        <Dropdown
          dropdownRef={dropdownRef}
          handleDropdownOpen={handleSearchBarClick}
          keyword={debouncedSearchKeyword}
          activeNumber={activeNumber}
          setActiveNumber={setActiveNumber}
          recommendedKeywords={recommendedKeywords}
          modifyKeyword={modifyKeyword}
        />
      )}
    </S.SearchContainer>
  );
};

export default Search;
