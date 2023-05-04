import ApiUrl from './ApiUrl';

const getCachedData = async (cacheName: string, url: string) => {
  const cacheStorage = await caches.open(cacheName);
  const cachedResponse = await cacheStorage.match(url);

  if (!cachedResponse || !cachedResponse.ok) {
    return false;
  }

  const result = await cachedResponse.json();

  return result;
};

const getData = async (keyword: string) => {
  const cacheName = 'relatedKeywords';
  const URL = `${ApiUrl.findRecommendedKeywords}${keyword}`;

  const cachedData = await getCachedData(cacheName, URL);

  if (cachedData) {
    return cachedData;
  }

  const cacheStorage = await caches.open(cacheName);
  await cacheStorage.add(URL);

  const result = await getCachedData(cacheName, URL);

  return result;
};

const fetchRecommendedKeywords = async (keyword: string) => {
  try {
    const data = await getData(keyword);
    console.info('calling api');
    return data;
  } catch (error) {
    return error;
  }
};

export default fetchRecommendedKeywords;
