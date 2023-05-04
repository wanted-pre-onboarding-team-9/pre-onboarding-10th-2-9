import { RecommendedKeywords } from '../@types/search';

type RecommendedKeywordProps = {
  keyword: RecommendedKeywords;
  className: string;
};

const RecommendedKeyword = ({ keyword, className }: RecommendedKeywordProps) => {
  return (
    <li key={keyword.id} className={className}>
      🔍 {keyword.name}
    </li>
  );
};

export default RecommendedKeyword;
