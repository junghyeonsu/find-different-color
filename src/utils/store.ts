type Keys = 'userName';

const store = {
  setSessionStorage(key: Keys, value: string): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  getSessionStorage(key: Keys): string | null {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  },
};

export default store;
