import { RecommendedKeywords } from '../@types/search';
import { SearchIconBlack } from './SearchImg';
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
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions, jsx-a11y/no-static-element-interactions
                  <S.RecommendedWordContainer
                    key={recommendedKeyword.id}
                    className={idx === activeNumber ? 'active' : ''}
                    onClick={() => {
                      modifyKeyword(recommendedKeyword.name);
                    }}
                    onMouseEnter={() => {
                      setActiveNumber(idx);
                    }}
                    onMouseLeave={() => {
                      setActiveNumber(-1);
                    }}
                  >
                    <SearchIconBlack />
                    <p>{recommendedKeyword.name}</p>
                  </S.RecommendedWordContainer>
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
