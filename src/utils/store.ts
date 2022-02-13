type Keys = 'userName';
type Value = { [k in Keys]: string };

const store = {
  setSessionStorage(key: string, value: Value): void {
    sessionStorage.setItem(key, JSON.stringify(value));
  },
  getSessionStorage(value: string): Value | null {
    const item = sessionStorage.getItem(value);
    return item ? JSON.parse(item) : null;
  },
};

export default store;
