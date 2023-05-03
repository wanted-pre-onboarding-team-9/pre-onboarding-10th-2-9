import instance from '.';

import ApiUrl from './ApiUrl';

const fetchRelatedKeywords = async (keyword: string) => {
  const { data } = await instance.get(`${ApiUrl.relatedKeywords}${keyword}`);
  console.info('calling api');
  return data;
};

export default fetchRelatedKeywords;
