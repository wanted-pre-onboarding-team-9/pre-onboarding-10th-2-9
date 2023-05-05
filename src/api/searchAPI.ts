import instance from '.';

import { RecommendedKeywords, cacheDataType } from '../@types/search';
import Cache from '../utils/cache';
import TEN_MINUTES_IN_MS from '../utils/const';

const cache = new Cache();

export const setSearchData = async (searchKeyword: string, data: RecommendedKeywords[]) => {
  const expiration = Date.now() + TEN_MINUTES_IN_MS;

  const cacheStoredResult = cache.get<cacheDataType>(searchKeyword);

  if (!cacheStoredResult) {
    const slicedData = data.slice(0, 8);
    cache.set(searchKeyword, { data: slicedData, expiration });
  } else {
    cache.set(searchKeyword, { data, expiration });
  }
};

export const getSearchData = async (searchKeyword: string) => {
  const cachedKeyword = cache.get<cacheDataType>(searchKeyword);

  let cachedKeywordList;

  if (cachedKeyword) {
    if (cachedKeyword.expiration < Date.now()) {
      cache.remove(searchKeyword);
    } else {
      cachedKeywordList = cachedKeyword.data;
    }
  }

  if (cachedKeywordList === undefined) {
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
