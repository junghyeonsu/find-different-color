import { atom } from 'recoil';

const loginState = atom<boolean>({
  key: 'loginState',
  default: false,
});

const userNameState = atom<string>({
  key: 'userNameState',
  default: '',
});

export { loginState, userNameState };
