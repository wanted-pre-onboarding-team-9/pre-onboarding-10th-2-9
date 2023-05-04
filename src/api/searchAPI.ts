import instance from '.';
import { RecommendedKeyword } from '../@types/search';

export const getSearchData = async (searchKeyword: string) => {
  // eslint-disable-next-line no-console
  console.info('calling api');
  const { data } = await instance.get<RecommendedKeyword[]>(`?name=${searchKeyword}`);
  return data;
};

export default {};
