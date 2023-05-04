import KeywordLine from './KeywordLine';

import { FocusedState, RecommendedWord } from '../@types/types';

type RecommendedKeywordsListProps = {
  recommendedKeywords: RecommendedWord[];
  focusedState: FocusedState;
};

const RecommendedKeywordsList = ({
  recommendedKeywords,
  focusedState,
}: RecommendedKeywordsListProps) => {
  return (
    <div>
      <p>추천 검색어</p>
      <ul>
        {recommendedKeywords.length ? (
          recommendedKeywords.map((keyword, index) => (
            <KeywordLine
              key={keyword.id}
              name={keyword.name}
              isFocused={focusedState.focusedIndex === index}
            />
          ))
        ) : (
          <KeywordLine key="-" name="검색어 없음" isFocused={false} />
        )}
      </ul>
    </div>
  );
};

export default RecommendedKeywordsList;
