export type DropdownProps = {
  keyword: string;
  recommendedKeywords: [{ name: string; id?: number }];
};

const Dropdown = ({ keyword, recommendedKeywords }: DropdownProps) => {
  const recommendSearchKeywords = recommendedKeywords.map(
    (recommendedKeyword) => recommendedKeyword.name,
  );

  return (
    <div>
      {keyword.length === 0 ? (
        <p>검색어 없음</p>
      ) : (
        <div>
          <div>{keyword}</div>
          <p>추천 검색어</p>
          <div>{recommendSearchKeywords}</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
