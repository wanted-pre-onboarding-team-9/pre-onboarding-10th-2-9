import React, { useEffect, useState } from 'react';

import SEARCH_FIELD from '../components/SearchField';
import RESULT_FILED from '../components/ResultField';
import { clinicData } from '../@types/clinic';
import * as API from '../api/clinic';
import { SEARCH_TERM } from '../@types/common';
import * as S from '../components/style';

const Main = () => {
  const [searchWord, setSearchWord] = useState('');
  const [searchResult, setSearchResult] = useState<clinicData[]>([]);

  const chgSearchWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value);
  };

  const doSearch = async () => {
    if (searchWord && searchWord.trim().length > 0) {
      const result = await API.getResult(searchWord);
      setSearchResult(result);
    }
  };

  useEffect(() => {
    if (searchWord.length <= 0)
      return () => {
        setSearchResult([]);
      };

    const timeoutId = setTimeout(() => {
      doSearch();
    }, SEARCH_TERM);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchWord]);

  return (
    <div>
      <S.Background>
        <S.IntroText>
          국내 모든 임상시험 검색하고
          <br />
          온라인으로 참여하기
        </S.IntroText>
        <SEARCH_FIELD value={searchWord} onChange={chgSearchWord} doSearch={doSearch} />
        <RESULT_FILED searchWord={searchWord} searchResult={searchResult} />
      </S.Background>
    </div>
  );
};

export default Main;
