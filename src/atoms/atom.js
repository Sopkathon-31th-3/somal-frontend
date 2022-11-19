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

export { wishItem, wishPrice, wishDate };
