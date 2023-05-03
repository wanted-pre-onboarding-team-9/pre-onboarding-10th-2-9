import { useState, useEffect } from 'react';
import { SearchIconBlack, SearchIconWhite } from './SearchImg';
import * as S from './style';
import getRecommendKeywords from '../utils/api';
import KeywordType from '../@types/response';

const SearchBar = () => {
  const [targetKeyword, setTargetKeyword] = useState<string>('');
  const [recommendedWords, setRecommendedWords] = useState<KeywordType[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newKeyword = e.target.value;
    setTargetKeyword(newKeyword);
  };
  useEffect(() => {
    const getKeywords = async () => {
      if (!targetKeyword) setRecommendedWords([]);
      else {
        const keywordsArr = await getRecommendKeywords(targetKeyword);
        setRecommendedWords(keywordsArr);
      }
    };
    getKeywords();
  }, [targetKeyword]);

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
