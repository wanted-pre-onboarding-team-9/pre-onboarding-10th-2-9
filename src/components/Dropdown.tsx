import { DropdownProps } from '../@types/props';
import SingleRecommendedWord from './SingleRecommendedWord';
import * as S from './style';

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
                    key={recommendedKeyword.id}
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
