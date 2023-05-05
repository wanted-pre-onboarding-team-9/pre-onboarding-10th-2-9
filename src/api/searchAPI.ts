import instance from '.';
import { Suggestion } from '../@types/search';

export const getSearchData = async (searchKeyword: string) => {
  // eslint-disable-next-line no-console
  console.info('calling api');
  const { data } = await instance.get<Suggestion[]>(`?name=${searchKeyword}`);
  return data;
};
