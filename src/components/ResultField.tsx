import { ResultProps } from '../@types/clinic';
import * as S from './style';

const ResultField = ({ searchWord, searchResult }: ResultProps) => {
  if (searchWord.length === 0) return <div />;

  if (!searchResult || searchResult.length <= 0)
    return <S.emptyResult>검색결과가 없습니다.</S.emptyResult>;

  return (
    <S.ResultDiv className="ResultField">
      + <S.recmdResult>추천검색어</S.recmdResult>
      {searchResult.map((result, idx: number) => (
        <S.ResultInput type="text" key={result.id} value={result.name} readOnly />
      ))}
    </S.ResultDiv>
  );
};

export default ResultField;
