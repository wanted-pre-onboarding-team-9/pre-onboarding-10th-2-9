import { SearchIconBlack, SearchIconWhite } from './SearchImg';
import * as S from './style';

const SearchBar = () => {
  return (
    <S.SearchBarWrapper>
      <S.IconWrapper>
        <SearchIconBlack />
      </S.IconWrapper>
      <S.SearchInput placeholder="질환명을 입력해주세요." />
      <S.SearchBtn>
        <S.IconWrapper>
          <SearchIconWhite />
        </S.IconWrapper>
      </S.SearchBtn>
    </S.SearchBarWrapper>
  );
};

export default SearchBar;
