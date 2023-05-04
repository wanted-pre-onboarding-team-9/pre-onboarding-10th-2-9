import { useEffect, useState } from 'react';
import { getSearchData } from '../api/searchAPI';
import { RecommendedKeyword } from '../@types/search';
import { KEYBOARD, MAX_DISPLAY_NUM, START_ACTIVE_INDEX } from '../utils/const';
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
  const [recommendedKeywords, setRecommendedSearchKeywords] = useState<RecommendedKeyword[]>([]);
  const [activeIndex, setActiveIndex] = useState(START_ACTIVE_INDEX);

  const debouncedSearchKeyword = useDebounce<string>(keyword, 500);
  const cachedData = useCache<RecommendedKeyword[]>(debouncedSearchKeyword);
  const cacheDispatch = useCacheDispatch();

  const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    setActiveIndex(START_ACTIVE_INDEX);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.nativeEvent.isComposing) return;

    switch (e.key) {
      case KEYBOARD.ENTER:
        setKeyword(recommendedKeywords[activeIndex].name);
        setActiveIndex(START_ACTIVE_INDEX);
        break;

      case KEYBOARD.ARROW_DOWN:
      case KEYBOARD.ARROW_UP:
        e.preventDefault();
        if (recommendedKeywords.length !== 0) {
          setActiveIndex(calcActiveIndex(e.key, activeIndex, recommendedKeywords.length - 1));
        }
        break;

      default:
        break;
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
        } else {
          setRecommendedSearchKeywords([]);
        }
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
