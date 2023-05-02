import instance from '.';

const getSearchData = async (searchKeyword: string) => {
  const { data } = await instance.get(`?name=${searchKeyword}`);
  // eslint-disable-next-line no-console
  console.info('calling api');
  return data;
};

export default getSearchData;
