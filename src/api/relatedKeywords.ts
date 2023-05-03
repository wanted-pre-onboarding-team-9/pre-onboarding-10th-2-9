import instance from '.';

import ApiUrl from './ApiUrl';

const fetchRelatedKeywords = async (keyword: string) => {
  const { data } = await instance.get(`${ApiUrl.relatedKeywords}${keyword}`);
  return data;
};

export default fetchRelatedKeywords;
