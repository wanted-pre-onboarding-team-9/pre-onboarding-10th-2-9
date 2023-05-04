import { SearchInputProps } from '../@types/search';
import * as S from './style';

const SearchInput = ({ value, onChange, onKeyDown, onFocus }: SearchInputProps) => {
  return (
    <S.InputContainer>
      <S.Input
        type="search"
        placeholder="질환명을 입력해 주세요."
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
      />
      <S.Button type="submit">검색</S.Button>
    </S.InputContainer>
  );
};

export default SearchInput;
