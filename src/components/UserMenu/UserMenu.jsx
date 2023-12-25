import { useDispatch, useSelector } from 'react-redux';
import css from './UserMenu.module.css';
import { selectUserData } from 'redux/auth/selectors';
import { logOutThunk } from 'redux/auth/operations';
const UserMenu = () => {
  const dispatch = useDispatch();
  const userData = useSelector(selectUserData);
  console.log(userData);
  const onLogOut = () => {
    dispatch(logOutThunk());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.userName}>{userData.email}</p>
      <button className={css.userButton} type="button" onClick={onLogOut}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
