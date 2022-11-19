import { atom } from 'recoil';

const sampleState = atom({
  key: 'sampleState',
  default: '',
});

export { sampleState };
