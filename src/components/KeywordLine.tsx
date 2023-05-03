type KeywordLineProps = {
  name: string;
};

const KeywordLine = ({ name }: KeywordLineProps) => {
  return <li>{name}</li>;
};

export default KeywordLine;
