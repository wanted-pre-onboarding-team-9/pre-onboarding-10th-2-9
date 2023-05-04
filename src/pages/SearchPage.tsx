import { useEffect, useState } from 'react';
import { getSearchData } from '../api/searchAPI';
import { RecommendedKeyword } from '../@types/search';
import { calcActiveIndex } from '../utils/keyboard';
import useDebounce from '../hooks/useDebounce';
import Dropdown from '../components/Dropdown';
import Title from '../components/Title';
import SearchInput from '../components/SearchInput';
import * as S from './style';

const Search = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [recommendedKeywords, setRecommendedSearchKeywords] = useState<RecommendedKeyword[]>([]);
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
      <Title />
      <SearchInput
        value={keyword}
        onChange={onKeywordChange}
        onKeyDown={onKeyDown}
        onClick={() => {
          // TODO: 드롭다운 열고 닫기
          setIsDropdownOpen(!isDropdownOpen);
        }}
      />
      <Dropdown
        isOpen={isDropdownOpen}
        keyword={keyword}
        activeIndex={activeIndex}
        recommendedKeywords={recommendedKeywords}
      />
    </S.SearchContainer>
  );
};

export default Search;
