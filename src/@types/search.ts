export interface Suggestion {
  name: string;
  id: number;
}

export interface SearchInputProps {
  onFocus: React.FocusEventHandler<HTMLInputElement>;
}
