import { useState, useEffect } from 'react';
import { SearchIconBlack, SearchIconWhite } from './SearchImg';
import * as S from './style';
import getRecommendKeywords from '../utils/api';
import KeywordType from '../@types/response';
import useDebounce from '../hooks/useDebounce';

const SearchBar = () => {
  const [targetWord, setTargetWord] = useState<string>('');
  const [recommendedWords, setRecommendedWords] = useState<KeywordType[]>([]);
  const debouncedTargetWord = useDebounce(targetWord, 500);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetWord(e.target.value.trim());
  };
  useEffect(() => {
    const getKeywords = async () => {
      if (!targetWord) setRecommendedWords([]);
      else {
        console.info('calling api');
        const keywordsArr = await getRecommendKeywords(targetWord);
        setRecommendedWords(keywordsArr);
      }
    };
    getKeywords();
  }, [debouncedTargetWord]);

  return (
    <S.SearchBarWrapper>
      <S.IconWrapper>
        <SearchIconBlack />
      </S.IconWrapper>
      <S.SearchInput placeholder="질환명을 입력해주세요." onChange={handleInputChange} />
      <S.SearchBtn>
        <S.IconWrapper>
          <SearchIconWhite />
        </S.IconWrapper>
      </S.SearchBtn>
    </S.SearchBarWrapper>
  );
};

export default SearchBar;
