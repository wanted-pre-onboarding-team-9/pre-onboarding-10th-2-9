import useClickOutside from '../hooks/useClickOutside';
import useBoolean from '../hooks/useBoolean';
import Dropdown from '../components/Dropdown';
import Title from '../components/Title';
import SearchInput from '../components/SearchInput';
import * as S from './style';

const Search = () => {
  const {
    value: isDropdownOpen,
    setFalse: closeDropdown,
    setTrue: openDropdown,
  } = useBoolean(false);
  const { ref } = useClickOutside<HTMLDivElement>(closeDropdown);

  return (
    <S.SearchContainer>
      <Title />
      <S.SearchBar ref={ref}>
        <SearchInput onFocus={openDropdown} />
        <Dropdown isOpen={isDropdownOpen} />
      </S.SearchBar>
    </S.SearchContainer>
  );
};

export default Search;
