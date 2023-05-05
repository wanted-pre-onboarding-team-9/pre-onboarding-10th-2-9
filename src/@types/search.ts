export interface RecommendedKeywords {
  name: string;
  id: number;
}

export interface cacheDataType {
  data: RecommendedKeywords[];
  expiration: number;
}
