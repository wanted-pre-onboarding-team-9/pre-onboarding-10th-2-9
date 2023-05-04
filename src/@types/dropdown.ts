import { RecommendedKeywords } from './search';

export interface DropdownProps {
  isOpen: boolean;
  keyword: string;
  activeNumber: number;
  recommendedKeywords: RecommendedKeywords[];
}
