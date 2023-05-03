import KeywordType from '../@types/response';
import SingleRecommendedWord from './SingleRecommendedWord';
import { DropdownContainer } from './style';
import * as S from './style';

interface DropdownProps {
  debouncedTargetWord: string;
  targetRecommendedWords: KeywordType[];
}
const Dropdown = ({ debouncedTargetWord, targetRecommendedWords }: DropdownProps) => {
  return (
    <DropdownContainer>
      {debouncedTargetWord ? (
        <SingleRecommendedWord word={debouncedTargetWord} />
      ) : (
        <p>검색어 없음</p>
      )}
      {targetRecommendedWords.length !== 0 && (
        <>
          <S.RecommendedWordTitle>추천 검색어</S.RecommendedWordTitle>
          {targetRecommendedWords.map((wordInfo: KeywordType) => {
            return <SingleRecommendedWord key={wordInfo.id} word={wordInfo.name} />;
          })}
        </>
      )}
    </DropdownContainer>
  );
};

export default Dropdown;
