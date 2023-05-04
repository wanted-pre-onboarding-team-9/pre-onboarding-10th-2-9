import instance from '.';
import { ResultProps, clinicData } from '../@types/clinic';
import storage from '../utils/storage';

const API_URL = `/?name=`;
const EXPIRE_TIME = 1000 * 10;

export const getResult = async (searchWord: string) => {
  const cacheData = storage.get<clinicData[]>(searchWord);
  if (cacheData && cacheData[0].expireTime > Date.now()) {
    return cacheData;
  }

  const { data } = await instance.get<clinicData[]>(`${API_URL}${searchWord}`);
  if (data) {
    data[0].expireTime = Date.now() + EXPIRE_TIME;
    storage.set(searchWord, JSON.stringify(data));
  }

  return data;
};

export default getResult;
