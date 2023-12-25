import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { selectAuthenticated } from 'redux/auth/selectors';
import css from './Navigation.module.css';

const Navigation = () => {
  const authenticated = useSelector(selectAuthenticated);
  return (
    <nav>
      <NavLink
        className={({ isActive }) =>
          `${css.headerLink} ${isActive ? css.active : ''}`
        }
        to="/"
      >
        Home
      </NavLink>
      {authenticated && (
        <NavLink
          className={({ isActive }) =>
            `${css.headerLink} ${isActive ? css.active : ''}`
          }
          to="/contacts"
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
