import { DropdownItemProps } from '../@types/dropdown';
import SearchIcon from './SearchIcon';
import * as S from './style';

const DropdownItem = ({ isActive, children }: DropdownItemProps) => {
  return (
    <S.Item className={isActive ? 'active' : ''}>
      <S.IconContainer>
        <SearchIcon />
      </S.IconContainer>
      {children}
    </S.Item>
  );
};

export default DropdownItem;
