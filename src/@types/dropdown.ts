import { RecommendedKeyword } from './search';

export interface DropdownProps {
  isOpen: boolean;
  keyword: string;
  setKeyword: (keyword: string) => void;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  recommendedKeywords: RecommendedKeyword[];
}

export interface DropdownItemProps {
  keyword: string;
  isActive: boolean;
  onHover: React.MouseEventHandler<HTMLLIElement>;
  onClick: React.MouseEventHandler<HTMLLIElement>;
  children: string;
}
