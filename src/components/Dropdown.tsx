import { BiSearch } from 'react-icons/bi';
import { RecommendedKeywords } from '../@types/search';

import * as S from './style';

export type DropdownProps = {
  keyword: string;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  recommendedKeywords: RecommendedKeywords[];
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
};

const EmptyDropdown = () => {
  return <S.NoRecommandWords>추천 검색어가 없습니다.</S.NoRecommandWords>;
};

const Dropdown = ({
  keyword,
  currentIndex,
  setCurrentIndex,
  recommendedKeywords,
  setKeyword,
}: DropdownProps) => {
  return (
    <S.DropdownContainer>
      {keyword.length !== 0 && (
        <S.SearchDropdownUnit
          isFocus={currentIndex === 0}
          onMouseOver={() => setCurrentIndex(0)}
          onMouseLeave={() => setCurrentIndex(-1)}
        >
          {keyword}
        </S.SearchDropdownUnit>
      )}
      {keyword.length === 0 || recommendedKeywords.length === 0 ? (
        <EmptyDropdown />
      ) : (
        <>
          <S.SearchNoticeWord>추천 검색어</S.SearchNoticeWord>
          {recommendedKeywords?.map((recommendedKeyword, index) => {
            return (
              <S.SearchDropdownUnit
                key={recommendedKeyword.id}
                isFocus={index + 1 === currentIndex}
                onClick={() => setKeyword(recommendedKeyword.name)}
                onMouseOver={() => setCurrentIndex(index + 1)}
                onMouseLeave={() => setCurrentIndex(-1)}
              >
                <BiSearch />
                <p>{recommendedKeyword.name}</p>
              </S.SearchDropdownUnit>
            );
          })}
        </>
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown;
