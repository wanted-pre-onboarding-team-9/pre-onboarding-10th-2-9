import { useSearchState } from '../contexts/SearchContext';
import DropdownItem from './DropdownItem';
import SearchIcon from './SearchIcon';
import * as S from './style';

export interface DropdownProps {
  isOpen: boolean;
}

const Dropdown = ({ isOpen }: DropdownProps) => {
  const { suggestions, inputText } = useSearchState();

  if (!isOpen) {
    return null;
  }

  return (
    <S.DropdownContainer>
      <S.Item>
        <S.IconContainer>
          <SearchIcon />
        </S.IconContainer>
        {inputText ? (
          <S.SameWord>{inputText}</S.SameWord>
        ) : (
          <S.Text>질환명을 입력해 주세요.</S.Text>
        )}
      </S.Item>

      <S.Description>추천 검색어</S.Description>

      {suggestions.length === 0 ? (
        <S.NoResults>검색어 없음</S.NoResults>
      ) : (
        suggestions.map(({ id, name }, idx) => (
          <DropdownItem key={id} index={idx}>
            {name}
          </DropdownItem>
        ))
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown;
