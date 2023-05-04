export interface clinicData {
  id: number;
  name: string;
  expireTime: number;
}

export interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  doSearch: () => void;
}

export interface ResultProps {
  searchWord: string;
  searchResult: clinicData[];
}
