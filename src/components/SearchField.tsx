import * as S from './style';
import { SearchProps } from '../@types/clinic';

const SearchField = ({ value, onChange, doSearch }: SearchProps) => {
  return (
    <S.SearchBG>
      <S.SearchWord value={value} onChange={onChange} placeholder="질환명을 입력해 주세요" />
      <S.SearchBtn onClick={doSearch}>검색</S.SearchBtn>
    </S.SearchBG>
  );
};

export default SearchField;
