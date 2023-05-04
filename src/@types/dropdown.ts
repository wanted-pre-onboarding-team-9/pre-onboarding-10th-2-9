import { RecommendedKeyword } from './search';

export interface DropdownProps {
  isOpen: boolean;
  keyword: string;
  activeNumber: number;
  recommendedKeywords: RecommendedKeyword[];
}
