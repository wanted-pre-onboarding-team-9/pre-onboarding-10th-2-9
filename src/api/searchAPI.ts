import instance from '.';

import { RecommendedKeyword } from '../@types/search';
import { TEN_MINUTES_IN_MS } from '../utils/const';
import storage from '../utils/storage';

type CachedData = { data: RecommendedKeyword[]; expiration: number };

export const setSearchData = async (searchKeyword: string, data: RecommendedKeyword[]) => {
  const expiration = Date.now() + TEN_MINUTES_IN_MS;

  const cachedKeyword = await storage.get(searchKeyword);
  if (!cachedKeyword) {
    storage.set(searchKeyword, { data, expiration });
  }
};

export const getSearchData = async (searchKeyword: string) => {
  const cachedKeyword: CachedData | undefined = await storage.get(searchKeyword);

  if (cachedKeyword) {
    if (cachedKeyword.expiration < Date.now()) {
      storage.remove(searchKeyword);
    } else {
      return cachedKeyword.data;
    }
  }

  // eslint-disable-next-line no-console
  console.info('calling api');

  const { data } = await instance.get<RecommendedKeyword[]>(`?name=${searchKeyword}`);
  setSearchData(searchKeyword, data);

  return data;
};
