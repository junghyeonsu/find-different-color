import { atom } from 'recoil';

const userNameState = atom<string>({
  key: 'userNameState',
  default: '',
});

export { userNameState };
