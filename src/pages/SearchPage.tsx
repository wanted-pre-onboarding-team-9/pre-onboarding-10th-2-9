import { useEffect, useState } from 'react';
import { getSearchData } from '../api/searchAPI';
import { RecommendedKeyword } from '../@types/search';
import { calcActiveIndex } from '../utils/keyboard';
import { MAX_DISPLAY_NUM } from '../utils/const';
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
  const [recommendedKeywords, setRecommendedSearchKeywords] = useState<RecommendedKeyword[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const debouncedSearchKeyword = useDebounce<string>(keyword, 500);
  const cachedData = useCache<RecommendedKeyword[]>(debouncedSearchKeyword);
  const cacheDispatch = useCacheDispatch();

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
    if (cachedData) {
      setRecommendedSearchKeywords(cachedData);
    } else {
      const onSearchChange = async () => {
        const searchKeyword = keyword.trim();
        if (searchKeyword !== '') {
          const searchData = await getSearchData(debouncedSearchKeyword);
          const slicedSearchData = searchData.slice(0, MAX_DISPLAY_NUM);
          setRecommendedSearchKeywords(slicedSearchData);
          cacheDispatch({
            type: 'SET',
            payload: { key: debouncedSearchKeyword, data: slicedSearchData },
          });
        }
        setActiveIndex(0);
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
          activeIndex={activeIndex}
          recommendedKeywords={recommendedKeywords}
        />
      </S.SearchBar>
    </S.SearchContainer>
  );
};

export default Search;
