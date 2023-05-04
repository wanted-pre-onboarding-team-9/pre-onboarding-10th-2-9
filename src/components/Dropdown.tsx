import { DropdownProps } from '../@types/dropdown';
import * as S from './style';

const Dropdown = ({ isOpen, keyword, activeNumber, recommendedKeywords }: DropdownProps) => {
  if (isOpen) {
    return null;
  }

  return (
    <S.DropdownContainer>
      <div className="result_box">
        <div className="keyword">{keyword}</div>
        <p>추천 검색어</p>
        {keyword.length === 0 ? (
          <p>추천 검색어가 없습니다.</p>
        ) : (
          <div>
            {recommendedKeywords?.map((recommendedKeyword, idx) => {
              let className = '';

              if (idx === activeNumber) {
                className = 'active';
              }

              return (
                <li key={recommendedKeyword.id} className={className}>
                  🔍 {recommendedKeyword.name}
                </li>
              );
            })}
          </div>
        )}
      </div>
    </S.DropdownContainer>
  );
};

export default Dropdown;
