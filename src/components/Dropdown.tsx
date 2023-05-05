/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-shadow */

import { RecommendedKeywords } from '../@types/search';
import * as S from './style';

export type DropdownProps = {
  keyword: string;
  activeNumber: number;
  recommendedKeywords: RecommendedKeywords[];
  setKeyword: any;
};

const Dropdown = ({ keyword, activeNumber, recommendedKeywords, setKeyword }: DropdownProps) => {
  const onChangeKeyword = (keyword: string) => {
    return setKeyword(keyword);
  };
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
                <li
                  key={recommendedKeyword.id}
                  className={className}
                  onClick={() => {
                    onChangeKeyword(recommendedKeyword.name);
                  }}
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
