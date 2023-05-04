import { DropdownItemProps } from '../@types/dropdown';
import SearchIcon from './SearchIcon';
import * as S from './style';

const DropdownItem = ({ keyword, isActive, onHover, onClick, children }: DropdownItemProps) => {
  const splitter = new RegExp(`(${keyword})`, 'g');
  const texts = children.split(splitter);

  return (
    <S.Item className={isActive ? 'active' : ''} onMouseEnter={onHover} onClick={onClick}>
      <S.IconContainer>
        <SearchIcon />
      </S.IconContainer>
      {texts.map((text, index) => {
        const key = text + index;
        if (keyword === text) {
          return <S.SameWord key={key}>{text}</S.SameWord>;
        }
        return <S.Text key={key}>{text}</S.Text>;
      })}
    </S.Item>
  );
};

export default DropdownItem;
