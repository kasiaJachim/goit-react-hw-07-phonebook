import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://64d345a067b2662bf3dbf2c4.mockapi.io',
});

export const contacts = async () => {
  const resposne = await instance.get('/');
  console.log(resposne);
};
