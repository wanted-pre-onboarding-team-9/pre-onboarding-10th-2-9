import { RecommendedKeywords } from '../@types/search';
import RecommendedKeyword from './RecommendedKeyword';
import * as S from './style';

export type DropdownProps = {
  keyword: string;
  activeNumber: number;
  recommendedKeywords: RecommendedKeywords[];
};

const Dropdown = ({ keyword, activeNumber, recommendedKeywords }: DropdownProps) => {
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

              return <RecommendedKeyword keyword={recommendedKeyword} className={className} />;
            })}
          </div>
        )}
      </div>
    </S.DropdownContainer>
  );
};

export default Dropdown;
