import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <div>
      <NavLink
        className={({ isActive }) =>
          `${css.headerLink} ${isActive ? css.active : ''}`
        }
        to="/register"
      >
        Register
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          `${css.headerLink} ${isActive ? css.active : ''}`
        }
        to="/login"
      >
        {' '}
        Login
      </NavLink>
    </div>
  );
};

export default AuthNav;
