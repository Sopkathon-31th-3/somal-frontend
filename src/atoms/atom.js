import { atom } from 'recoil';

const wishItem = atom({
  key: 'wishItem',
  default: '',
});
const wishPrice = atom({
  key: 'wishPrice',
  default: '',
});
const userName = atom({
  key: 'userName',
  default: '',
});
const likeFood = atom({
  key: 'likeFood',
  default: '',
});

export { wishItem, wishPrice, userName, likeFood };
