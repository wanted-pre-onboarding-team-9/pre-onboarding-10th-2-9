import { RecommendedKeywords } from '../@types/search';

type RecommendedKeywordProps = {
  keyword: RecommendedKeywords;
  isActive: string;
};

const RecommendedKeyword = ({ keyword, isActive }: RecommendedKeywordProps) => {
  return (
    <li key={keyword.id} className={isActive}>
      🔍 {keyword.name}
    </li>
  );
};

export default RecommendedKeyword;
