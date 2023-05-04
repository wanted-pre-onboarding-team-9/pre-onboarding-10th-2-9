import { RecommendedKeyword } from './search';

export interface DropdownProps {
  isOpen: boolean;
  keyword: string;
  activeIndex: number;
  recommendedKeywords: RecommendedKeyword[];
}

export interface DropdownItemProps {
  keyword: string;
  isActive?: boolean;
  children: string;
}
