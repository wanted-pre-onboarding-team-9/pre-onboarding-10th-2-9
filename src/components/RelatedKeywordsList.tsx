import KeywordLine from './KeywordLine';

import { FocusedState, RelatedKeyword } from '../@types/types';

type RelatedKeywordsListProps = {
  relatedKeywords: RelatedKeyword[];
  focusedState: FocusedState;
};

const RelatedKeywordsList = ({ relatedKeywords, focusedState }: RelatedKeywordsListProps) => {
  return (
    <div>
      <p>추천 검색어</p>
      <ul>
        {relatedKeywords.length ? (
          relatedKeywords.map((keyword, index) => (
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

export default RelatedKeywordsList;
