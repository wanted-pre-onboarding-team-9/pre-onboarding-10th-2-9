import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { GetSearchResponse } from '../@types';
import API_URL from '../api/ApiUrl';
import getSearchData from '../api/search';
import useDebounce from '../hooks/useDebounce';

const SearchContainer = styled.div`
  background-color: #cae9ff;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

const TextTitle = styled.span`
  font-size: 12px;
  color: gray;
`;

const RecommendSearch = styled.div`
  background-color: #fff;
  width: 300px;
  border-radius: 10px;
  margin: 10px auto;
  text-align: start;
  padding: 10px;
`;

const SearchInputBox = styled.input`
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  width: 260px;
  border: none;
  padding: 13px;
`;

const SearchButton = styled.button`
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  padding: 13px;
  border: none;
  background-color: #007be9;
  color: white;
`;

const Search = () => {
  const [searchResult, setSearchResult] = useState<GetSearchResponse>();
  const [word, setWord] = useState('');
  const debounceValue = useDebounce(word);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    const fetchSearchResult = async () => {
      try {
        const cache = await caches.open('search-result-cache');
        const cachedResponse = await cache.match(`${API_URL}?name=${debounceValue}`);

        if (cachedResponse) {
          const data = await cachedResponse.json();
          setSearchResult(data);
        } else {
          window.console.info('calling api');
          const data = await getSearchData(debounceValue);
          setSearchResult(data);

          const cacheResponse = new Response(JSON.stringify(data));
          await cache.put(`${API_URL}?name=${debounceValue}`, cacheResponse);
        }
      } catch (error) {
        window.console.error(error);
      }
    };
    fetchSearchResult();
  }, [debounceValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    setWord(currentValue);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowDown') {
      setSelectedIndex((prevIndex) => (prevIndex === searchResult!.length - 1 ? 0 : prevIndex + 1));
    } else if (e.key === 'ArrowUp') {
      setSelectedIndex((prevIndex) => (prevIndex <= 0 ? searchResult!.length - 1 : prevIndex - 1));
    }
  };

  return (
    <SearchContainer>
      <div>
        <h2>국내 모든 임상시험 검색하고 온라인으로 참여하기</h2>
        <SearchInputBox
          placeholder="질환명을 입력해 주세요."
          type="text"
          value={word}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <SearchButton type="button">검색</SearchButton>
      </div>
      {word ? (
        <RecommendSearch>
          <TextTitle>추천 검색어</TextTitle>
          {searchResult?.length ? (
            searchResult?.map((res, index) => (
              <div
                key={res.id}
                style={{ background: selectedIndex === index ? '#cae9ff' : '#ffffff' }}
              >
                {res.name}
              </div>
            ))
          ) : (
            <div>추천 검색어가 없습니다.</div>
          )}
        </RecommendSearch>
      ) : null}
    </SearchContainer>
  );
};

export default Search;
