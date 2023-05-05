export interface DropdownItemProps {
  keyword: string;
  isActive: boolean;
  onMouseEnter: React.MouseEventHandler<HTMLLIElement>;
  onMouseLeave: React.MouseEventHandler<HTMLLIElement>;
  onClick: React.MouseEventHandler<HTMLLIElement>;
  children: string;
}
