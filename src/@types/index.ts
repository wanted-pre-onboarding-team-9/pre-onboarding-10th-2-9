type SearchData = {
  name: string;
  id: number;
};

export type GetSearchResponse = SearchData[];

export interface onSearchType {
  onSearch: (input: string) => void;
}
