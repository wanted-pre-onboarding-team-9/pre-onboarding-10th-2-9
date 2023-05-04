import { RecommendedKeywords } from '../@types/search';
import * as S from './style';

export type DropdownProps = {
  dropdownRef: React.MutableRefObject<HTMLUListElement | null>;
  keyword: string;
  activeNumber: number;
  recommendedKeywords: RecommendedKeywords[];
  modifyKeyword: (newKeyword: string) => void;
  handleDropdownOpen: () => void;
};

const Dropdown = ({
  dropdownRef,
  keyword,
  activeNumber,
  recommendedKeywords,
  modifyKeyword,
  handleDropdownOpen,
}: DropdownProps) => {
  return (
    <S.DropdownContainer ref={dropdownRef} onClick={handleDropdownOpen}>
      <div className="result_box">
        <div className="keyword">{keyword}</div>
        <p>추천 검색어</p>
        {keyword.length === 0 ? (
          <p>추천 검색어가 없습니다.</p>
        ) : (
          <div>
            {recommendedKeywords?.map((recommendedKeyword, idx) => {
              return (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                <li
                  onClick={() => {
                    modifyKeyword(recommendedKeyword.name);
                  }}
                  key={recommendedKeyword.id}
                  className={idx === activeNumber ? 'active' : ''}
                >
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
