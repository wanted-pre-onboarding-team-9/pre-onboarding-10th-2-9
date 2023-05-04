import instance from '.';

import { RecommendedKeywords } from '../@types/search';
import { TEN_MINUTES_IN_MS } from '../utils/const';
import storage from '../utils/storage';

export const setSearchData = async (searchKeyword: string, data: RecommendedKeywords[]) => {
  const expiration = Date.now() + TEN_MINUTES_IN_MS;

  const cachedKeyword = await storage.get(searchKeyword);
  if (!cachedKeyword) {
    const maxlength = data.length > 8 ? 8 : data.length;
    const sliceData = data.slice(0, maxlength);

    storage.set(searchKeyword, { sliceData, expiration });
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
    if (data.length > 0) {
      setSearchData(searchKeyword, data);
      return data;
    }
  }

  return cachedKeywordList;
};
