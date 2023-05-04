import * as S from './style';
import { SearchProps } from '../@types/clinic';

const SearchField = ({ value, onChange, doSearch }: SearchProps) => {
  return (
    <div>
      <S.SearchWord value={value} onChange={onChange} />
      <S.SearchBtn onClick={doSearch}>검색</S.SearchBtn>
    </div>
  );
};

export default SearchField;
