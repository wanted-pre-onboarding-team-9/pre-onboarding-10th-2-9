type SearchBarProps = {
  inputText: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const SearchBar = ({ inputText, onChange, onKeyPress: onKeyDown }: SearchBarProps) => {
  return (
    <div>
      <label htmlFor="search-input">
        <input
          id="search-input"
          type="text"
          name="search-input"
          value={inputText}
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
      </label>
      <button type="button">검색</button>
    </div>
  );
};

export default SearchBar;
