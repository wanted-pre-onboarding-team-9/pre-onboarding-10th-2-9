import { Suggestion } from '../@types/search';
import { ApiUrl } from './ApiUrl';

export const getSearchData = async (searchKeyword: string): Promise<Suggestion[]> => {
  // eslint-disable-next-line no-console
  console.info('calling api');
  const response = await fetch(ApiUrl.SEARCH_KEYWORD + searchKeyword);
  const data = await response.json();
  return data;
};
