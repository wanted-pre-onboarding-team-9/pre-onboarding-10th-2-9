export type DropdownProps = {
  keyword: string;
  recommendedKeywords: [{ name: string; id?: number }];
};

const Dropdown = ({ keyword, recommendedKeywords }: DropdownProps) => {
  const recommendSearchKeywords = recommendedKeywords.map(
    (recommendedKeyword) => recommendedKeyword.name,
  );

  return (
    <>
      <div>{keyword}</div>
      <div>{recommendSearchKeywords}</div>
    </>
  );
};

export default Dropdown;
