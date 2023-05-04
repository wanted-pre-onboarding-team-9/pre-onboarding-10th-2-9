import { DropdownProps } from '../@types/dropdown';
import DropdownItem from './DropdownItem';
import * as S from './style';

const Dropdown = ({ isOpen, keyword, activeIndex, recommendedKeywords }: DropdownProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <S.DropdownContainer>
      <DropdownItem keyword={keyword}>{keyword || '질환명을 입력해 주세요.'}</DropdownItem>
      <S.Description>추천 검색어</S.Description>
      {recommendedKeywords.length === 0 ? (
        <div>추천 검색어가 없습니다.</div>
      ) : (
        recommendedKeywords.map(({ id, name }, idx) => (
          <DropdownItem key={id} keyword={keyword} isActive={idx === activeIndex}>
            {name}
          </DropdownItem>
        ))
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown;
