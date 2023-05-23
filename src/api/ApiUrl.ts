const BASE_URL = process.env.NODE_ENV === 'production' ? '/proxy' : '';

export const ApiUrl = Object.freeze({
  SEARCH_KEYWORD: `${BASE_URL}search-conditions/?name=`,
});
