interface CacheMap {
  [key: string]: { data: unknown };
}
class Cache {
  private cache: CacheMap;

  constructor() {
    this.cache = {};
  }

  private has(key: string) {
    return this.cache[key] !== undefined;
  }

  set<T>(key: string, data: T): void {
    this.cache[key] = {
      data,
    };
  }

  remove(key: string): void {
    if (this.cache[key]) {
      delete this.cache[key];
    }
  }

  clear(): void {
    this.cache = {};
  }

  get<T>(key: string): T | undefined {
    if (this.has(key)) {
      const { data } = this.cache[key];
      return data as T;
    }
    return undefined;
  }

  getAll() {
    return Object.entries(this.cache).reduce((acc, [key, { data }]) => {
      return { ...acc, [key]: data };
    }, {});
  }
}

export default Cache;
