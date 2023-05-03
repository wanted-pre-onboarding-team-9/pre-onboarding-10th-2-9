import { useState } from 'react';

import Title from '../components/Title';
import SearchBar from '../components/SearchBar';
import RelatedKeywordsList from '../components/RelatedKeywordsList';

import useFetchRelatedKeywords from '../hooks/useFetchRelatedKeywords';

const SearchPage = () => {
  const [inputText, setInputText] = useState('');

  const { isError, relatedKeywords } = useFetchRelatedKeywords(inputText);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setInputText(value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;

    if (key === 'Enter') {
      // TODO: 이벤트핸들링 추가
    }
  };

  return (
    <div>
      <Title />
      <SearchBar inputText={inputText} onChange={handleChange} handleKeyDown={handleKeyDown} />
      {isError ? null : <RelatedKeywordsList relatedKeywords={relatedKeywords} />}
    </div>
  );
};

export default SearchPage;
