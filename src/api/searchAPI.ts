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
    const { data } = await instance.get(`?name=${searchKeyword}`);
    if (data.length && data.length <= 8) {
      setSearchData(searchKeyword, data);
      return data;
    }

    if (data.length && data.length > 8) {
      setSearchData(searchKeyword, data.slice(0, 9));
      return data;
    }
  }

  return cachedKeywordList;
};
