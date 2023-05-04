import { ResultProps } from '../@types/clinic';

const ResultField = ({ searchResult }: ResultProps) => {
  if (searchResult === null) return <div>검색결과가 없습니다.</div>;

  return (
    <div>
      <div>추천검색어</div>
      {searchResult.map((result) => (
        <div key={result.id}>{result.name}</div>
      ))}
    </div>
  );
};

export default ResultField;
