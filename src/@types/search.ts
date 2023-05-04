export interface RecommendedKeywords {
  name: string;
  id: number;
}

export interface SearchInputProps {
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLInputElement>;
  onKeyDown: React.KeyboardEventHandler<HTMLInputElement>;
  value: string;
}
