import axios from 'axios';

const BASE_URL = 'http://54.180.113.169:3000';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const postWishData = async ({ foodName, wishItemPrice }) => {
  try {
    const post = await client.post('/result', {
      foodName,
      wishItemPrice,
    });
    return post;
  } catch (err) {
    alert(err);
  }
};
