import { NavLink } from 'react-router-dom';
import sprite from '../../assets/images/RegisterForm/sprite.svg';
import s from './Navigation.module.scss';

export const Navigation = () => {
  return (
    <nav className={s.nav}>
      <ul className={s.list}>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            <svg>
              <use href={`${sprite}#icon-home`}></use>
            </svg>
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/diagram"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            <div className={s.svgContainer}>
              <svg>
                <use href={`${sprite}#icon-statistics`}></use>
              </svg>
            </div>
            <span>Statistics</span>
          </NavLink>
        </li>
        <li className={s.itemCurrency}>
          <NavLink
            to="/currency"
            className={({ isActive }) => (isActive ? s.activeLink : s.link)}
          >
            <div className={s.svgContainer}>
              <svg>
                <use href={`${sprite}#icon-currency`}></use>
              </svg>
            </div>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
