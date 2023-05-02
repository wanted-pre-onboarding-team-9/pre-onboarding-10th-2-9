export type DropdownProps = {
  keyword: string;
  recommendedKeywords: [{ name: string; id?: number }];
};

const Dropdown = ({ keyword, recommendedKeywords }: DropdownProps) => {
  return (
    <div>
      {keyword.length === 0 ? (
        <p>검색어 없음</p>
      ) : (
        <div>
          <div>{keyword}</div>
          <p>추천 검색어</p>
          {recommendedKeywords.map((recommendedKeyword) => (
            <div key={recommendedKeyword.id}>{recommendedKeyword.name}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
