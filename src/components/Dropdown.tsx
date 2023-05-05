import { RecommendedKeywords } from '../@types/search';
import RecommendedKeyword from './RecommendedKeyword';
import * as S from './style';

export type DropdownProps = {
  keyword: string;
  activeIndex: number;
  recommendedKeywords: RecommendedKeywords[];
};

const Dropdown = ({ keyword, activeIndex, recommendedKeywords }: DropdownProps) => {
  return (
    <S.DropdownContainer>
      <div className="result_box">
        <div className="keyword">{keyword}</div>
        <p>추천 검색어</p>
        {keyword.length === 0 ? (
          <p>검색어 없음</p>
        ) : (
          <div>
            {recommendedKeywords?.map((recommendedKeyword, idx) => (
              <RecommendedKeyword
                keyword={recommendedKeyword}
                isActive={activeIndex === idx ? 'active' : ''}
              />
            ))}
          </div>
        )}
      </div>
    </S.DropdownContainer>
  );
};

export default Dropdown;
