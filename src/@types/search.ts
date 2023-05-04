export interface RecommendedKeyword {
  name: string;
  id: number;
}

export type SearchInputProps = Pick<
  React.HTMLProps<HTMLInputElement>,
  'value' | 'onChange' | 'onKeyDown' | 'onFocus' | 'onBlur'
>;
