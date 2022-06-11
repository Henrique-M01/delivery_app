import axios from './axios';

export const createSale = (data, token) => {
  axios.post('/sales', data, {
    headers: {
      authorization: token,
    },
  }).then((res) => res.data);
};

export default (id, token) => (
  axios.get(`/sales/${id}/?role=sellerId`, {
    headers: {
      authorization: token,
    },
  }).then((res) => res.data)
    .catch((err) => console.error(err))
);
