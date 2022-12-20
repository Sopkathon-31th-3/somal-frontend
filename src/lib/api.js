import axios from 'axios';

const BASE_URL = 'http://54.180.113.169:3000';

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const postWishData = async ({ foodName, wishItemPrice }) => {
  const post = await client.post('/result', {
    foodName,
    wishItemPrice,
  });
  return post;
};
