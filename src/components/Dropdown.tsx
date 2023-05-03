import { RecommendedKeywords } from '../@types/search';
import * as S from './style';

export type DropdownProps = {
  keyword: string;
  activeNumber: number;
  recommendedKeywords: RecommendedKeywords[];
};

const Dropdown = ({ keyword, activeNumber, recommendedKeywords }: DropdownProps) => {
  return (
    <S.DropdownContainer>
      {keyword.length === 0 ? (
        <p>검색어 없음</p>
      ) : (
        <div>
          <div>{keyword}</div>
          <p>추천 검색어</p>
          {recommendedKeywords?.map((recommendedKeyword, idx) => {
            let className = '';

            if (idx === activeNumber) {
              className = 'active';
            }

            return (
              <li key={recommendedKeyword.id} className={className}>
                {recommendedKeyword.name}
              </li>
            );
          })}
        </div>
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown;
