import { atom } from 'recoil';

const wishItem = atom({
  key: 'wishItem',
  default: '',
});
const wishPrice = atom({
  key: 'wishPrice',
  default: '',
});
const wishDate = atom({
  key: 'wishDate',
  default: '',
});
const likeFood = atom({
  key: 'likeFood',
  default: '',
});

export { wishItem, wishPrice, wishDate, likeFood };
