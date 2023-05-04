import instance from '.';
import { clinicData } from '../@types/clinic';
import { API_URL, EXPIRE_TIME } from '../@types/common';
import storage from '../utils/storage';

export const getResult = async (searchWord: string) => {
  const cacheData = storage.get<clinicData[]>(searchWord);
  if (cacheData && cacheData[0].expireTime > Date.now()) {
    return cacheData;
  }

  const { data } = await instance.get<clinicData[]>(`${API_URL}${searchWord}`);
  console.info('calling api');

  if (data && data.length > 0) {
    data[0].expireTime = Date.now() + EXPIRE_TIME;
    storage.set(searchWord, JSON.stringify(data));
  }

  return data;
};

export default getResult;
