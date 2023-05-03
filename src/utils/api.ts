import KeywordType from '../@types/response';

const SEARCH_API_URL = 'https://api.clinicaltrialskorea.com/api/v1/search-conditions/?name=';

const getRecommendKeywords = async (keyword: string): Promise<KeywordType[]> => {
  const response = await fetch(SEARCH_API_URL + keyword);
  const data = await response.json();
  return data;
};

export default getRecommendKeywords;
