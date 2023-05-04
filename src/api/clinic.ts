import instance from '.';
import { clinicData } from '../@types/clinic';
import storage from '../utils/storage';

const API_URL = `/?name=`;

export const getResult = async (searchWord: string) => {
  const cacheData = storage.get<clinicData[]>(searchWord);
  if (cacheData) {
    return cacheData;
  }

  const { data } = await instance.get<clinicData[]>(`${API_URL}${searchWord}`);
  if (data) storage.set(searchWord, JSON.stringify(data));

  return data;
};

export default getResult;
