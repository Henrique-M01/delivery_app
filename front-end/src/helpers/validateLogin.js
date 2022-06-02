import loginSchema from '../schemas/loginSchema';

const validateLogin = (data) => {
  const validate = loginSchema.validate(data);

  if (!validate) return false;

  return true;
};

export default validateLogin;
