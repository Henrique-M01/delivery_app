import axios from './axios';

export default ( id, token ) => (
  axios.get(`/sales/${ id }/?role=sellerId`, {
    headers: {
      authorization: token,
    }
  }).then((res) => res.data)
    .catch((err) => console.error(err))
);