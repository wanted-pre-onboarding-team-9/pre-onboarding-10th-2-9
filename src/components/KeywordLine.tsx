import styled from 'styled-components';

const List = styled.li`
  background: ${(props) => props.className === 'true' && 'gray'};
`;

type KeywordLineProps = {
  name: string;
  isFocused: boolean;
};

const KeywordLine = ({ name, isFocused }: KeywordLineProps) => {
  return <List className={String(isFocused)}>{name}</List>;
};

export default KeywordLine;
