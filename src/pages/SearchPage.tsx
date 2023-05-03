import { useEffect, useState } from 'react';

import getSearchData from '../api/search';
import useDebounce from '../hooks/useDebounce';
import Dropdown from '../components/Dropdown';
import { keydownHandler } from '../utils/keydownHandler';

const Search = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [keyword, setKeyword] = useState('');
  const [recommendedKeywords, setRecommendedSearchKeywords] = useState<
    [{ name: string; id: number }]
  >([{ name: '', id: 0 }]);
  const [activeNumber, setActiveNumber] = useState(-1);

  const debouncedSearchKeyword: string = useDebounce<string>(keyword, 500);

  const onSearchChange = async () => {
    if (keyword.length > 0) {
      const searchData = await getSearchData(debouncedSearchKeyword);
      setRecommendedSearchKeywords(searchData);
    } else if (keyword.length === 0) {
      setActiveNumber(-1);
    }
  };

  const onKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    onSearchChange();
  }, [debouncedSearchKeyword]);

  return (
    <div>
      <input
        type="text"
        placeholder="질환명을 입력해 주세요."
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        onChange={onKeywordChange}
        value={keyword}
        onKeyDown={(e) => keydownHandler({ e, activeNumber, setActiveNumber, recommendedKeywords })}
      />
      <button type="submit">🔍</button>
      {(isDropdownOpen || keyword) && (
        <Dropdown
          keyword={keyword}
          activeNumber={activeNumber}
          recommendedKeywords={recommendedKeywords}
        />
      )}
    </div>
  );
};

export default Search;
