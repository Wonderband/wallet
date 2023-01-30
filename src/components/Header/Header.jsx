import React from 'react';
import { Link } from 'react-router-dom';
import logout from '../../assets/svg/logOut.svg';
import logo from '../../assets/svg/logo.svg';
import css from './Header.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/global/globalSlice';

export const Header = () => {
  const userName = useSelector((state) => state.session.user?.username);
  const dispatch = useDispatch();

  return (
    <header className={css.header}>
      <div className={css.header__container}>
        <div className={css.header__logo}>
          <img src={logo} className={css.header__logo_icon}width='40' height='40' alt='logo' />
          <span className={css.header__logo_text}>Wallet</span>
        </div>
        <div className={css.header__logout}>
          <span className={css.header__username}>{userName}</span>
          <button className={css.header__link} onClick={() => dispatch(logOut())}>
            <img src={logout} width='18' height='18' alt='logout' />
            <span className={css.header__logout_text}>Exit</span>
          </button>
        </div>
      </div>
    </header>
  );
};
