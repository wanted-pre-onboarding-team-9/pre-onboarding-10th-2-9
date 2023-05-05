import { useEffect, useState } from 'react';
import { BiSearch } from 'react-icons/bi';
import { getSearchData } from '../api/searchAPI';
import useDebounce from '../hooks/useDebounce';
import Dropdown from '../components/Dropdown';
import { keydownHandler } from '../utils/keydownHandler';
import { RecommendedKeywords } from '../@types/search';

import Title from '../components/Title';

import * as S from './style';

const Search = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [keyword, setKeyword] = useState<string>('');
  const [recommendedKeywords, setRecommendedSearchKeywords] = useState<RecommendedKeywords[]>([
    { name: '', id: 0 },
  ]);
  const [currentIndex, setCurrentIndex] = useState(-1);

  const debouncedSearchKeyword: string = useDebounce<string>(keyword, 500);

  const onSearchChange = async () => {
    if (keyword.length > 0) {
      const searchData = await getSearchData(debouncedSearchKeyword);

      setRecommendedSearchKeywords(searchData.slice(0, 8));
    } else if (keyword.length === 0) {
      setRecommendedSearchKeywords([]);
      setCurrentIndex(-1);
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
      <Title />
      <S.InputContainer>
        <input
          type="search"
          placeholder="질환명을 입력해 주세요."
          onFocus={() => setIsDropdownOpen(true)}
          onBlur={() => setIsDropdownOpen(false)}
          onChange={onKeywordChange}
          value={keyword}
          onKeyDown={(event) => {
            setCurrentIndex(
              keydownHandler({
                keyValue: event.key,
                currentIndex,
                maxIndex: recommendedKeywords.length - 1,
              }),
            );
          }}
        />
        <button type="submit">
          <BiSearch />
        </button>
      </S.InputContainer>
      {isDropdownOpen && keyword && (
        <Dropdown
          keyword={keyword}
          currentIndex={currentIndex}
          setCurrentIndex={setCurrentIndex}
          recommendedKeywords={recommendedKeywords}
          setKeyword={setKeyword}
        />
      )}
    </S.SearchContainer>
  );
};

export default Search;
