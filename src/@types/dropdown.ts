import { Suggestion } from './search';

export interface DropdownProps {
  isOpen: boolean;
  keyword: string;
  setKeyword: (keyword: string) => void;
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  suggestions: Suggestion[];
}

export interface DropdownItemProps {
  keyword: string;
  isActive: boolean;
  onMouseEnter: React.MouseEventHandler<HTMLLIElement>;
  onMouseLeave: React.MouseEventHandler<HTMLLIElement>;
  onClick: React.MouseEventHandler<HTMLLIElement>;
  children: string;
}
