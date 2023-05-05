import { DropdownItemProps } from '../@types/dropdown';
import SearchIcon from './SearchIcon';
import * as S from './style';

const DropdownItem = ({
  keyword,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
  children,
}: DropdownItemProps) => {
  const keywordRegex = new RegExp(`(${keyword})`, 'gi');
  const texts = children.split(keywordRegex);

  return (
    <S.Item
      className={isActive ? 'active' : ''}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <S.IconContainer>
        <SearchIcon />
      </S.IconContainer>
      {texts.map((text, index) => {
        const key = text + index;
        if (keywordRegex.test(text)) {
          return <S.SameWord key={key}>{text}</S.SameWord>;
        }
        return <S.Text key={key}>{text}</S.Text>;
      })}
    </S.Item>
  );
};

export default DropdownItem;
