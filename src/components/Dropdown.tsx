import { useSuggestions } from '../contexts/SuggestionsContext';
import DropdownItem from './DropdownItem';
import SearchIcon from './SearchIcon';
import * as S from './style';

export interface DropdownProps {
  isOpen: boolean;
  keyword: string;
  setKeyword: (keyword: string) => void;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
}

const Dropdown = ({ isOpen, keyword, setKeyword, activeIndex, setActiveIndex }: DropdownProps) => {
  const suggestions = useSuggestions();

  if (!isOpen) {
    return null;
  }

  return (
    <S.DropdownContainer>
      <S.Item>
        <S.IconContainer>
          <SearchIcon />
        </S.IconContainer>
        {keyword ? <S.SameWord>{keyword}</S.SameWord> : <S.Text>질환명을 입력해 주세요.</S.Text>}
      </S.Item>

      <S.Description>추천 검색어</S.Description>

      {suggestions.length === 0 ? (
        <S.NoResults>검색어 없음</S.NoResults>
      ) : (
        suggestions.map(({ id, name }, idx) => (
          <DropdownItem
            key={id}
            keyword={keyword}
            isActive={idx === activeIndex}
            onMouseEnter={() => setActiveIndex(idx)}
            onMouseLeave={() => setActiveIndex(-1)}
            onClick={() => setKeyword(name)}
          >
            {name}
          </DropdownItem>
        ))
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown;
