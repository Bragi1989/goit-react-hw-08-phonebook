import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from 'redux/auth/operations';
import css from './RegisterForm.module.css';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const onSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    const formData = { name, email, password };
    dispatch(registerThunk(formData));
    form.reset();
  };

  return (
    <form className={css.formRegister} onSubmit={onSubmit} autoComplete="off">
      <label className={css.labelRegister}>
        <span>Name </span>
        <input
          className={css.inputRegister}
          type="text"
          placeholder="John Doe"
          required
          name="userName"
        />
      </label>
      <label className={css.labelRegister}>
        <span>Email </span>
        <input
          className={css.inputRegister}
          type="emil"
          placeholder="hotmail@hotmail.com"
          required
          name="userEmail"
        />
      </label>
      <label className={css.labelRegister}>
        <span>Password: </span>
        <input
          className={css.inputRegister}
          type="password"
          placeholder="*******"
          required
          name="userPassword"
        />
        <button className={css.inputRegisterButton} type="submit">
          Sign Up
        </button>
      </label>
      <br />
    </form>
  );
};

export default RegisterForm;
