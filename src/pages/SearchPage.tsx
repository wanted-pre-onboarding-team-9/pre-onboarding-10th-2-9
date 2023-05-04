import { useEffect, useState } from 'react';

import * as S from './style';
import { getSearchData } from '../api/searchAPI';
import useDebounce from '../hooks/useDebounce';
import Dropdown from '../components/Dropdown';
import { keydownHandler } from '../utils/keydownHandler';
import { RecommendedKeywords } from '../@types/search';

const Search = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [recommendedKeywords, setRecommendedSearchKeywords] = useState<RecommendedKeywords[]>([
    { name: '', id: 0 },
  ]);
  const [activeNumber, setActiveNumber] = useState(0);

  const debouncedSearchKeyword: string = useDebounce<string>(keyword, 500);

  const onSearchChange = async () => {
    if (keyword.length > 0) {
      const searchData = await getSearchData(debouncedSearchKeyword);

      if (searchData?.length > 8) {
        setRecommendedSearchKeywords(searchData.slice(0, 8));
      } else {
        setRecommendedSearchKeywords(searchData);
      }
    } else if (keyword.length === 0) {
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
      <S.InputContainer>
        <input
          type="search"
          placeholder="질환명을 입력해 주세요."
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          onChange={onKeywordChange}
          value={keyword}
          onKeyDown={(e) =>
            keydownHandler({ e, activeNumber, setActiveNumber, recommendedKeywords })
          }
        />
        <button type="submit">검색</button>
      </S.InputContainer>
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
