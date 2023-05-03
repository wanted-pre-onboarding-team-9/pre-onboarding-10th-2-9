import instance from '.';
import { GetSearchResponse } from '../@types';

const getSearchData = async (param: string) => {
  const { data } = await instance.get<GetSearchResponse>(`?name=${param}`);
  return data;
};

export default getSearchData;
