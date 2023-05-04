import instance from '.';
import { clinicData } from '../@types/clinic';

const API_URL = `/?name=`;

export const getResult = async (searchWord: string) => {
  const { data } = await instance.get<clinicData[]>(`${API_URL}${searchWord}`);
  return data;
};

export default getResult;
