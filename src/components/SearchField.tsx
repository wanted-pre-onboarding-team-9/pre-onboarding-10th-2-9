import * as S from './style';

type SearchFieldProps = {
  toggleDropdown: (e: React.MouseEvent<HTMLInputElement>) => void;
  onKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
};

const SearchField = ({
  toggleDropdown,
  onKeywordChange,
  keyword,
  handleKeyDown,
}: SearchFieldProps) => {
  return (
    <S.InputContainer>
      <input
        type="search"
        placeholder="질환명을 입력해 주세요."
        onClick={toggleDropdown}
        onChange={onKeywordChange}
        value={keyword}
        onKeyDown={handleKeyDown}
      />
      <button type="submit">검색</button>
    </S.InputContainer>
  );
};

export default SearchField;
