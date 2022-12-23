import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

const wishItem = atom({
  key: 'wishItem',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
const wishPrice = atom({
  key: 'wishPrice',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
const userName = atom({
  key: 'userName',
  default: '',
  effects_UNSTABLE: [persistAtom],
});
const likeFood = atom({
  key: 'likeFood',
  default: '',
  effects_UNSTABLE: [persistAtom],
});

export { wishItem, wishPrice, userName, likeFood };
