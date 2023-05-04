import instance from '.';

import { RecommendedKeywords } from '../@types/search';
import Cache from '../utils/cache';
import { TEN_MINUTES_IN_MS } from '../utils/const';

const cache = new Cache();

type searchDataProp = {
  data: RecommendedKeywords[];
  expiration: number;
};

export const setSearchData = async (searchKeyword: string, data: RecommendedKeywords[]) => {
  const expiration = Date.now() + TEN_MINUTES_IN_MS;

  const cachedKeyword = await cache.get(searchKeyword);
  if (!cachedKeyword) {
    const maxlength = data.length > 8 ? 8 : data.length;
    // eslint-disable-next-line no-param-reassign
    data = data.slice(0, maxlength);

    cache.set(searchKeyword, { data, expiration });
  }
};

export const getSearchData = async (searchKeyword: string) => {
  const cachedKeyword = await cache.get<searchDataProp>(searchKeyword);

  let cachedKeywordList;

  if (cachedKeyword) {
    if (cachedKeyword.expiration < Date.now()) {
      cache.remove(searchKeyword);
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
