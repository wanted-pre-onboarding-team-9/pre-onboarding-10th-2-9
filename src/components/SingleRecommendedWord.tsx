import { SearchIconBlack } from './SearchImg';
import * as S from './style';
import { DropdownProps } from './Dropdown';

type SingleRecommendedWordProps = Pick<
  DropdownProps,
  'activeNumber' | 'setActiveNumber' | 'modifyKeyword'
> & {
  idx: number;
  word: string;
};

const SingleRecommendedWord = ({
  idx,
  activeNumber,
  word,
  modifyKeyword,
  setActiveNumber,
}: SingleRecommendedWordProps) => {
  return (
    <S.RecommendedWordContainer
      className={idx === activeNumber ? 'active' : ''}
      onClick={() => {
        modifyKeyword(word);
      }}
      onMouseEnter={() => {
        setActiveNumber(idx);
      }}
      onMouseLeave={() => {
        setActiveNumber(-1);
      }}
    >
      <SearchIconBlack />
      <p>{word}</p>
    </S.RecommendedWordContainer>
  );
};

export default SingleRecommendedWord;
