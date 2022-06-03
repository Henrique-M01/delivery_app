import axios from './axios';

export default ({ email, password, name }) => (
  axios.post('/register', {
    email,
    password,
    name,
    role: 'customer',
  }).then((res) => res.data)
    .catch((err) => console.error(err))
);
