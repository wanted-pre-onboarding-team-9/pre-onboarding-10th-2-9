import { RecommendedKeywords } from '../@types/search';
import * as S from './style';
import { keydownHandler } from '../utils/keydownHandler';

type SearchBarProps = {
  searchBarRef: React.MutableRefObject<HTMLDivElement | null>;
  handleSearchBarClick: () => void;
  onKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
  activeNumber: number;
  setActiveNumber: React.Dispatch<React.SetStateAction<number>>;
  recommendedKeywords: RecommendedKeywords[];
  modifyKeyword: (newKeyword: string) => void;
};

const SearchBar = ({
  searchBarRef,
  handleSearchBarClick,
  onKeywordChange,
  keyword,
  activeNumber,
  setActiveNumber,
  recommendedKeywords,
  modifyKeyword,
}: SearchBarProps) => {
  return (
    <S.InputContainer ref={searchBarRef}>
      <input
        type="search"
        placeholder="질환명을 입력해 주세요."
        onClick={handleSearchBarClick}
        onChange={onKeywordChange}
        value={keyword}
        onKeyDown={(e) =>
          keydownHandler({ e, activeNumber, setActiveNumber, recommendedKeywords, modifyKeyword })
        }
      />
      <button type="submit">검색</button>
    </S.InputContainer>
  );
};

export default SearchBar;
