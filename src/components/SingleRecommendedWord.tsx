import { SearchIconBlack } from './SearchImg';
import * as S from './style';

interface SingleRecommendedWord {
  word: string;
}

const SingleRecommendedWord = ({ word }: SingleRecommendedWord) => {
  return (
    <S.RecommendedWordContainer>
      <S.IconWrapper>
        <SearchIconBlack />
      </S.IconWrapper>
      <p>{word}</p>
    </S.RecommendedWordContainer>
  );
};

export default SingleRecommendedWord;
