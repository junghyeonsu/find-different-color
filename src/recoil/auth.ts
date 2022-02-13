import { atom } from 'recoil';

const authState = atom<boolean>({
  key: 'authState',
  default: false,
});

const userNameState = atom<string>({
  key: 'userNameState',
  default: '',
});

export { authState, userNameState };
