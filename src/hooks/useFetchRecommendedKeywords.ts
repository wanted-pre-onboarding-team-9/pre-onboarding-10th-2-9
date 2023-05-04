import { useEffect, useState } from 'react';

import fetchRecommendedKeywords from '../api/recommendedKeywords';

import { RecommendedWord } from '../@types/types';

type UseFetchRecommendedKeywordsProps = {
  isError?: boolean;
  recommendedKeywords: RecommendedWord[];
};

const useFetchRecommendedKeywords = (word: string): UseFetchRecommendedKeywordsProps => {
  const [recommendedKeywords, setRecommendedKeywords] = useState<UseFetchRecommendedKeywordsProps>({
    isError: true,
    recommendedKeywords: [],
  });

  const fetchKeywords = async (keyword: string) => {
    const result = await fetchRecommendedKeywords(keyword);
    return result;
  };

  useEffect(() => {
    fetchKeywords(word)
      .then((value) => {
        setRecommendedKeywords({
          isError: false,
          recommendedKeywords: [...value],
        });
      })
      .catch((error) => {
        if (error) {
          setRecommendedKeywords({ isError: true, recommendedKeywords: [] });
        }
      });
  }, [word]);

  return recommendedKeywords;
};

export default useFetchRecommendedKeywords;
