import { useEffect, useState } from 'react';
import { getSearchData } from '../api/searchAPI';
import { RecommendedKeywords } from '../@types/search';
import { calcActiveIndex } from '../utils/keyboard';
import useDebounce from '../hooks/useDebounce';
import Dropdown from '../components/Dropdown';
import * as S from './style';

const Search = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [recommendedKeywords, setRecommendedSearchKeywords] = useState<RecommendedKeywords[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const debouncedSearchKeyword = useDebounce<string>(keyword, 500);

  const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;
    const newActiveIndex = calcActiveIndex(e.key, activeIndex, recommendedKeywords.length - 1);
    if (newActiveIndex !== undefined) {
      setActiveIndex(newActiveIndex);
    }
  };

  useEffect(() => {
    const onSearchChange = async () => {
      const searchKeyword = keyword.trim();
      if (searchKeyword !== '') {
        const searchData = await getSearchData(debouncedSearchKeyword);
        setRecommendedSearchKeywords(searchData.slice(0, 8));
      }
      setActiveIndex(0);
    };
    onSearchChange();
  }, [debouncedSearchKeyword]);

  return (
    <S.SearchContainer>
      <S.Title>
        국내 모든 임상시험 검색하고
        <br />
        온라인으로 참여하기
      </S.Title>
      <S.InputContainer>
        <input
          type="search"
          placeholder="질환명을 입력해 주세요."
          onClick={() => setIsDropdownOpen((prev) => !prev)}
          onChange={onKeywordChange}
          value={keyword}
          onKeyDown={onKeyDown}
        />
        <button type="submit">검색</button>
      </S.InputContainer>
      {(isDropdownOpen || keyword) && (
        <Dropdown
          keyword={keyword}
          activeNumber={activeIndex}
          recommendedKeywords={recommendedKeywords}
        />
      )}
    </S.SearchContainer>
  );
};

export default Search;
