import { RecommendedKeywords } from './response';

export type SearchBarProps = {
  searchBarRef: React.MutableRefObject<HTMLDivElement | null>;
  handleSearchBarClick: () => void;
  onKeywordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  keyword: string;
  activeNumber: number;
  setActiveNumber: React.Dispatch<React.SetStateAction<number>>;
  recommendedKeywords: RecommendedKeywords[];
  modifyKeyword: (newKeyword: string) => void;
};

export type DropdownProps = {
  dropdownRef: React.MutableRefObject<HTMLDivElement | null>;
  keyword: string;
  activeNumber: number;
  setActiveNumber: React.Dispatch<React.SetStateAction<number>>;
  recommendedKeywords: RecommendedKeywords[];
  modifyKeyword: (newKeyword: string) => void;
  handleDropdownOpen: () => void;
};

export type SingleRecommendedWordProps = Pick<
  DropdownProps,
  'activeNumber' | 'setActiveNumber' | 'modifyKeyword'
> & {
  idx: number;
  word: string;
};

export type KeydownHandlerProps = {
  e: React.KeyboardEvent<HTMLInputElement>;
  activeNumber: number;
  setActiveNumber: React.Dispatch<React.SetStateAction<number>>;
  recommendedKeywords: RecommendedKeywords[];
  modifyKeyword: (newKeyword: string) => void;
};
