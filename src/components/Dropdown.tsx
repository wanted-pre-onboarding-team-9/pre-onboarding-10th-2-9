import { RecommendedKeywords } from '../@types/search';
import SingleRecommendedWord from './SingleRecommendedWord';
import * as S from './style';

export type DropdownProps = {
  dropdownRef: React.MutableRefObject<HTMLDivElement | null>;
  keyword: string;
  activeNumber: number;
  setActiveNumber: React.Dispatch<React.SetStateAction<number>>;
  recommendedKeywords: RecommendedKeywords[];
  modifyKeyword: (newKeyword: string) => void;
  handleDropdownOpen: () => void;
};

const Dropdown = ({
  dropdownRef,
  keyword,
  activeNumber,
  setActiveNumber,
  recommendedKeywords,
  modifyKeyword,
  handleDropdownOpen,
}: DropdownProps) => {
  return (
    <S.DropdownContainer ref={dropdownRef} onClick={handleDropdownOpen}>
      <div className="result_box">
        {keyword.length === 0 ? (
          <p className="description">검색어 없음</p>
        ) : (
          <>
            <p className="description">추천 검색어</p>
            <div>
              {recommendedKeywords?.map((recommendedKeyword, idx) => {
                return (
                  <SingleRecommendedWord
                    idx={idx}
                    activeNumber={activeNumber}
                    word={recommendedKeyword.name}
                    modifyKeyword={modifyKeyword}
                    setActiveNumber={setActiveNumber}
                  />
                );
              })}
            </div>
          </>
        )}
      </div>
    </S.DropdownContainer>
  );
};

export default Dropdown;
