import { DropdownProps } from '../@types/dropdown';
import * as S from './style';

const Dropdown = ({ isOpen, keyword, activeIndex, recommendedKeywords }: DropdownProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <S.DropdownContainer>
      <S.Keyword>{keyword}</S.Keyword>
      <p>추천 검색어</p>
      {recommendedKeywords.length === 0 ? (
        <p>추천 검색어가 없습니다.</p>
      ) : (
        recommendedKeywords.map(({ id, name }, idx) => (
          <li key={id} className={idx === activeIndex ? 'active' : ''}>
            🔍 {name}
          </li>
        ))
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown;
