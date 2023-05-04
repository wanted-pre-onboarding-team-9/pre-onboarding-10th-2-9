import { SearchInputProps } from '../@types/search';
import * as S from './style';

const SearchInput = ({ onClick, onChange, value, onKeyDown }: SearchInputProps) => {
  return (
    <S.InputContainer>
      <input
        type="search"
        placeholder="질환명을 입력해 주세요."
        onClick={onClick}
        onChange={onChange}
        value={value}
        onKeyDown={onKeyDown}
      />
      <button type="submit">검색</button>
    </S.InputContainer>
  );
};

export default SearchInput;
