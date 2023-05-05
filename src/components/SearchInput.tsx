import { useSearchState, useSearchDispatch } from '../contexts/SearchContext';
import { SearchInputProps } from '../@types/search';
import * as S from './style';

const SearchInput = ({ onFocus }: SearchInputProps) => {
  const { inputText } = useSearchState();
  const { controlKeyboard, changeInputText } = useSearchDispatch();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    changeInputText(e.target.value);
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    controlKeyboard(e);
  };

  return (
    <S.InputContainer>
      <S.Input
        type="search"
        placeholder="질환명을 입력해 주세요."
        onChange={onChange}
        value={inputText}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
      />
      <S.Button type="submit">검색</S.Button>
    </S.InputContainer>
  );
};

export default SearchInput;
