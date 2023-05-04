const storage = {
  get: <T>(key: string): T | null => {
    try {
      const item = localStorage.getItem(key);
      if (item) return JSON.parse(item);
      return null;
    } catch (error) {
      return null;
    }
  },
  set: (key: string, item: string) => {
    localStorage.setItem(key, item);
  },
};

export default storage;
