import { useEffect, useState } from 'react';

import * as S from './style';
import { getSearchData } from '../api/searchAPI';
import useDebounce from '../hooks/useDebounce';
import useDropdown from '../hooks/useDropdown';
import Dropdown from '../components/Dropdown';
import { keydownHandler } from '../utils/keydownHandler';
import { RecommendedKeywords } from '../@types/search';

const Search = () => {
  const MAX_REC_NUM = 8;
  const [keyword, setKeyword] = useState('');
  const [recommendedKeywords, setRecommendedSearchKeywords] = useState<RecommendedKeywords[]>([
    { name: '', id: 0 },
  ]);
  const [activeNumber, setActiveNumber] = useState(0);

  const { isDropdownOpen, searchBarRef, handleSearchBarClick } = useDropdown();
  const debouncedSearchKeyword: string = useDebounce<string>(keyword.trim(), 500);

  const onSearchChange = async () => {
    if (debouncedSearchKeyword.length > 0) {
      const searchData = (await getSearchData(debouncedSearchKeyword)).slice(0, MAX_REC_NUM + 1);
      setRecommendedSearchKeywords(searchData);
    } else if (debouncedSearchKeyword.length === 0) {
      setActiveNumber(0);
    }
  };

  const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    onSearchChange();
  }, [debouncedSearchKeyword]);

  return (
    <S.SearchContainer>
      <S.Title>
        국내 모든 임상시험 검색하고 <br />
        온라인으로 참여하기
      </S.Title>
      <S.InputContainer ref={searchBarRef}>
        <input
          type="search"
          placeholder="질환명을 입력해 주세요."
          onClick={handleSearchBarClick}
          onChange={onKeywordChange}
          value={keyword}
          onKeyDown={(e) =>
            keydownHandler({ e, activeNumber, setActiveNumber, recommendedKeywords })
          }
        />
        <button type="submit">검색</button>
      </S.InputContainer>
      {(isDropdownOpen || debouncedSearchKeyword) && (
        <Dropdown
          keyword={debouncedSearchKeyword}
          activeNumber={activeNumber}
          recommendedKeywords={recommendedKeywords}
        />
      )}
    </S.SearchContainer>
  );
};

export default Search;
