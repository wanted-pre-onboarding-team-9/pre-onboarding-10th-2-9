import KeywordLine from './KeywordLine';

import { RelatedKeyword } from '../@types/types';

type RelatedKeywordsListProps = {
  relatedKeywords: RelatedKeyword[];
};

const RelatedKeywordsList = ({ relatedKeywords }: RelatedKeywordsListProps) => {
  return (
    <div>
      <p>추천 검색어</p>
      <ul>
        {relatedKeywords.length ? (
          relatedKeywords.map((keyword) => <KeywordLine key={keyword.id} name={keyword.name} />)
        ) : (
          <KeywordLine key="0" name="검색어 없음" />
        )}
      </ul>
    </div>
  );
};

export default RelatedKeywordsList;
