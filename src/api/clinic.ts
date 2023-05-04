import instance from '.';
import { clinicData } from '../@types/clinic';
import LocalCache from '../utils/LocalCache';

const API_URL = `/?name=`;

export const getResult = async (searchWord: string) => {
  const cacheData = LocalCache.get<clinicData[]>(searchWord);
  if (cacheData) {
    return cacheData;
  }

  const { data } = await instance.get<clinicData[]>(`${API_URL}${searchWord}`);
  if (data) LocalCache.set(searchWord, JSON.stringify(data));

  return data;
};

export default getResult;
