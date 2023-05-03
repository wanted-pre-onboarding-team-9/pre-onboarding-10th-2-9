import { useState, useEffect } from 'react';
import { SearchIconBlack, SearchIconWhite } from './SearchImg';
import * as S from './style';
import getRecommendKeywords from '../utils/api';
import KeywordType from '../@types/response';
import useDebounce from '../hooks/useDebounce';

const SearchBar = () => {
  const [targetKeyword, setTargetKeyword] = useState<string>('');
  const [recommendedWords, setRecommendedWords] = useState<KeywordType[]>([]);
  const debouncedSearchKeyword = useDebounce(targetKeyword, 500);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetKeyword(e.target.value.trim());
  };
  useEffect(() => {
    const getKeywords = async () => {
      if (!targetKeyword) setRecommendedWords([]);
      else {
        console.info('calling api');
        const keywordsArr = await getRecommendKeywords(targetKeyword);
        setRecommendedWords(keywordsArr);
      }
    };
    getKeywords();
  }, [debouncedSearchKeyword]);

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
