import RegisterForm from 'components/RegisterForm/RegisterForm';
import React from 'react';
import { Helmet } from 'react-helmet';

const RegisterPage = () => {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
