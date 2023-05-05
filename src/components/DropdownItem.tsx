import { DropdownItemProps } from '../@types/dropdown';
import { useSearchState, useSearchDispatch } from '../contexts/SearchContext';
import { START_ACTIVE_INDEX } from '../utils/const';
import SearchIcon from './SearchIcon';
import * as S from './style';

const DropdownItem = ({ index, children: name }: DropdownItemProps) => {
  const { inputText, activeIndex } = useSearchState();
  const { changeActiveIndex, changeInputText } = useSearchDispatch();

  const onMouseEnter = () => changeActiveIndex(index);
  const onMouseLeave = () => changeActiveIndex(START_ACTIVE_INDEX);
  const onClick = () => changeInputText(name);

  const keywordRegex = new RegExp(`(${inputText})`, 'gi');
  const texts = name.split(keywordRegex);

  return (
    <S.Item
      className={index === activeIndex ? 'active' : ''}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      <S.IconContainer>
        <SearchIcon />
      </S.IconContainer>
      {texts.map((text, idx) => {
        const key = text + idx;
        if (keywordRegex.test(text)) {
          return <S.SameWord key={key}>{text}</S.SameWord>;
        }
        return <S.Text key={key}>{text}</S.Text>;
      })}
    </S.Item>
  );
};

export default DropdownItem;
