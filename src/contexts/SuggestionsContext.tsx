import { createContext, useContext, useState } from 'react';
import { getSearchData } from '../api/searchAPI';
import { MAX_DISPLAY_NUM } from '../utils/const';
import type Cache from '../utils/cache';
import { Suggestion } from '../@types/search';

type State = Suggestion[];
interface Dispatch {
  changeKeyword: (keyword: string) => void;
  clearSuggestions: () => void;
}

const SuggestionsContext = createContext<State | null>(null);
const SuggestionsDispatchContext = createContext<Dispatch | null>(null);

export const SuggestionsContextProvider = ({
  cache,
  children,
}: {
  cache: Cache;
  children: React.ReactNode;
}) => {
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

  return (
    <SuggestionsContext.Provider value={suggestions}>
      <SuggestionsDispatchContext.Provider value={{ changeKeyword, clearSuggestions }}>
        {children}
      </SuggestionsDispatchContext.Provider>
    </SuggestionsContext.Provider>
  );
};

export const useSuggestions = () => {
  const state = useContext(SuggestionsContext);
  if (!state) {
    throw new Error('SuggestionsContextProvider not found');
  }
  return state;
};

export const useSuggestionsDispatch = () => {
  const dispatch = useContext(SuggestionsDispatchContext);
  if (!dispatch) {
    throw new Error('SuggestionsContextProvider not found');
  }
  return dispatch;
};
