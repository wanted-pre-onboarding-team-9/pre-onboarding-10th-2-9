export interface clinicData {
  id: number;
  name: string;
}

export interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  doSearch: () => void;
}

export interface ResultProps {
  searchResult: clinicData[];
}
