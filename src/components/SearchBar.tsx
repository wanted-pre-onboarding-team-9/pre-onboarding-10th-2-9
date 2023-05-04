import { SearchBarProps } from '../@types/props';
import * as S from './style';
import keydownHandler from '../utils/keydownHandler';
import { SearchIconWhite } from './SearchImg';

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
      <S.SearchBtn>
        <SearchIconWhite />
      </S.SearchBtn>
    </S.InputContainer>
  );
};

export default SearchBar;
