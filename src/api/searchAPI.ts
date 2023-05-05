/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
import instance from '.';

import { RecommendedKeywords } from '../@types/search';
import { TEN_MINUTES_IN_MS } from '../utils/const';
import storage from '../utils/storage';

export const setSearchData = async (searchKeyword: string, data: RecommendedKeywords[]) => {
  const expiration = Date.now() + TEN_MINUTES_IN_MS;

  const cachedKeyword = await storage.get(searchKeyword);
  if (!cachedKeyword) {
    storage.set(searchKeyword, { data, expiration });
  }
};

export const getSearchData = async (searchKeyword: string) => {
  const cachedKeyword = await storage.get(searchKeyword);

  let cachedKeywordList;

  if (cachedKeyword) {
    if (cachedKeyword.expiration < Date.now()) {
      storage.remove(searchKeyword);
    } else {
      cachedKeywordList = cachedKeyword.data;
    }
  }

  if (!cachedKeywordList) {
    // eslint-disable-next-line no-console
    console.info('calling api');
    const response = await fetch(`/api/v1/search-conditions/?name=${searchKeyword}`).then((res) => {
      return res;
    });
    const data = response?.json().then((data) => {
      return data;
    });
    setSearchData(searchKeyword, await data);
    return data;
  }

  return cachedKeywordList;
};
