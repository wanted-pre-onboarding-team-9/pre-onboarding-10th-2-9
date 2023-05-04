import { DropdownProps } from '../@types/dropdown';
import DropdownItem from './DropdownItem';
import * as S from './style';

const Dropdown = ({ isOpen, keyword, activeIndex, recommendedKeywords }: DropdownProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <S.DropdownContainer>
      <DropdownItem>{keyword}</DropdownItem>
      <S.Description>추천 검색어</S.Description>
      {recommendedKeywords.length === 0 ? (
        <S.Description>추천 검색어가 없습니다.</S.Description>
      ) : (
        recommendedKeywords.map(({ id, name }, idx) => (
          <DropdownItem key={id} isActive={idx === activeIndex}>
            {name}
          </DropdownItem>
        ))
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown;
