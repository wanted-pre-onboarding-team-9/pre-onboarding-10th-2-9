import React, { useEffect, useState } from 'react';

import SEARCH_FIELD from '../components/SearchField';
import RESULT_FILED from '../components/ResultField';
import { clinicData } from '../@types/clinic';
import * as API from '../api/clinic';

const SEARCH_TERM = 500;

const Main = () => {
  const [searchWord, setSearchWord] = useState('');
  const [searchResult, setSearchResult] = useState<clinicData[]>([]);

  const chgSearchWord = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchWord(event.target.value);
  };

  const doSearch = async () => {
    const result = await API.getResult(searchWord);
    setSearchResult(result);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchWord && searchWord.trim().length > 0) doSearch();
    }, SEARCH_TERM);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [searchWord]);

  return (
    <div>
      <SEARCH_FIELD value={searchWord} onChange={chgSearchWord} doSearch={doSearch} />
      <RESULT_FILED searchResult={searchResult} />
    </div>
  );
};

export default Main;
