import { useSearchState, useSearchDispatch } from '../contexts/SearchContext';
import SearchIcon from './SearchIcon';
import * as S from './style';

interface DropdownItemProps {
  index: number;
  children: string;
}

const DropdownItem = ({ index, children: name }: DropdownItemProps) => {
  const { inputText, activeIndex } = useSearchState();
  const { hoverSuggestion, inactivate, changeInputText } = useSearchDispatch();

  const onMouseEnter = () => hoverSuggestion(index);
  const onClick = () => changeInputText(name);

  const keywordRegex = new RegExp(`(${inputText})`, 'gi');
  const texts = name.split(keywordRegex);

  return (
    <S.Item
      className={index === activeIndex ? 'active' : ''}
      onMouseEnter={onMouseEnter}
      onMouseLeave={inactivate}
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
