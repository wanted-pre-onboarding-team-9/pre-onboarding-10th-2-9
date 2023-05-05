import { useState } from 'react';
import { Suggestion } from '../@types/search';
import { getSearchData } from '../api/searchAPI';
import { MAX_DISPLAY_NUM } from '../utils/const';
import type Cache from '../utils/cache';

type UseSuggestionsOutput = [Suggestion[], (keyword: string) => Promise<void>];

const useSuggestions = (cache: Cache): UseSuggestionsOutput => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);

  const clearSuggestions = () => setSuggestions([]);
  const changeKeyword = async (keyword: string) => {
    if (keyword === '') {
      clearSuggestions();
    } else {
      const cachedData = cache.get<Suggestion[]>(keyword);
      if (cachedData) {
        setSuggestions(cachedData);
      } else {
        const searchData = await getSearchData(keyword);
        const slicedSearchData = searchData.slice(0, MAX_DISPLAY_NUM + 1);
        setSuggestions(slicedSearchData);
        cache.set(keyword, slicedSearchData);
      }
    }
  };

  return [suggestions, changeKeyword];
};

export default useSuggestions;
