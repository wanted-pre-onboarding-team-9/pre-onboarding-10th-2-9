import { useEffect, useState } from 'react';

import fetchRelatedKeywords from '../api/relatedKeywords';

import { RelatedKeyword } from '../@types/types';

type UseFetchRelatedKeywordsProps = {
  isError?: boolean;
  relatedKeywords: RelatedKeyword[];
};

const useFetchRelatedKeywords = (word: string): UseFetchRelatedKeywordsProps => {
  const [relatedKeywords, setRelatedKeywords] = useState<UseFetchRelatedKeywordsProps>({
    isError: true,
    relatedKeywords: [],
  });

  const fetchKeywords = async (keyword: string) => {
    const result = await fetchRelatedKeywords(keyword);
    return result;
  };

  useEffect(() => {
    fetchKeywords(word)
      .then((value) => {
        setRelatedKeywords({
          isError: false,
          relatedKeywords: [...value],
        });
      })
      .catch((error) => {
        if (error.key) {
          setRelatedKeywords({ isError: true, relatedKeywords: [] });
        }
      });
  }, [word]);

  return relatedKeywords;
};

export default useFetchRelatedKeywords;
