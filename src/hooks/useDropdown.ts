import { useEffect, useCallback, useRef, useState } from 'react';

const useDropdown = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const searchBarRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const handleSearchBarClick = useCallback(() => {
    setIsDropdownOpen(true);
  }, []);

  const handleOutsideClick = useCallback(
    (e: MouseEvent) => {
      if (
        isDropdownOpen &&
        searchBarRef.current &&
        !searchBarRef.current.contains(e.target as Node) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      )
        setIsDropdownOpen(false);
    },
    [isDropdownOpen],
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return {
    isDropdownOpen,
    searchBarRef,
    dropdownRef,
    handleSearchBarClick,
  };
};

export default useDropdown;
