import { useState, useEffect } from 'react';

import { Dropdown, Guidance, SearchBar } from '../components';
import { Background } from '../components/style';
import getRecommendKeywords from '../utils/api';
import KeywordType from '../@types/response';
import useDebounce from '../hooks/useDebounce';

interface RecommendWordsType {
  [key: string]: KeywordType[];
}

const Search = () => {
  const MAX_REC_NUM = 8;
  const [targetWord, setTargetWord] = useState<string>('');
  const [targetRecommendedWords, setTargetRecommendedWords] = useState<KeywordType[]>([]);
  const [recommendedWords, setRecommendedWords] = useState<RecommendWordsType>({ '': [] });
  const debouncedTargetWord = useDebounce(targetWord, 500);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetWord(e.target.value.trim());
  };

  useEffect(() => {
    const getKeywords = async () => {
      if (recommendedWords[debouncedTargetWord]) {
        setTargetRecommendedWords(recommendedWords[debouncedTargetWord]);
      } else {
        console.info('calling api');
        const words = (await getRecommendKeywords(debouncedTargetWord)).slice(0, MAX_REC_NUM + 1);
        setTargetRecommendedWords(words);
        setRecommendedWords((prev) => {
          return { ...prev, [debouncedTargetWord]: words };
        });
      }
    };
    getKeywords();
  }, [debouncedTargetWord]);

  return (
    <Background>
      <Guidance />
      <SearchBar handleInputChange={handleInputChange} />
      <Dropdown
        debouncedTargetWord={debouncedTargetWord}
        targetRecommendedWords={targetRecommendedWords}
      />
    </Background>
  );
};

export default Search;
