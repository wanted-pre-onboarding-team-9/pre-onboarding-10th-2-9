import ApiUrl from './ApiUrl';

// TODO: CORS 에러 해결을 위해 instance 사용을 중단함. 추후 결정하기
// const fetchRelatedKeywords = async (keyword: string) => {
//   const { data } = await instance.get(`${ApiUrl.relatedKeywords}${keyword}`, {
//     headers: { 'Cache-Control': 'no-cache' },
//   });
//   console.info('calling api');
//   return data;
// };

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
  const URL = `${ApiUrl.relatedKeywords}${keyword}`;

  const cachedData = await getCachedData(cacheName, URL);

  if (cachedData) {
    return cachedData;
  }

  const cacheStorage = await caches.open(cacheName);
  await cacheStorage.add(URL);

  const result = await getCachedData(cacheName, URL);

  return result;
};

const fetchRelatedKeywords = async (keyword: string) => {
  try {
    const data = await getData(keyword);
    return data;
  } catch (error) {
    return error;
  }
};

export default fetchRelatedKeywords;
