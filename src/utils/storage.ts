const storage = {
  get: (key: string) => {
    const value = localStorage.getItem(key);
    return value && JSON.parse(value);
  },

  set: (key: string, item: object) => {
    const value = JSON.stringify(item);
    localStorage.setItem(key, value);
  },

  remove: (key: string) => {
    localStorage.removeItem(key);
  },
};

export default storage;
