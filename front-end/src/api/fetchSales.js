import axios from './axios';

export const nada = '';

export const createSale = (data, token) => {
  axios.post('/sales', data, {
    headers: {
      authorization: token,
    },
  }).then((res) => res.data);
};
