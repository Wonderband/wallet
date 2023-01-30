import { Header } from 'components/Header/Header';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Currency } from '../Currency/Currency';
import css from './Layout.module.css';

export const Layout = () => {
  const isAuth = useSelector(state => state.session.isAuth);

  return (
    <div className={css.container}>
      {isAuth && <Header />}
      <div>
        I'm LAYOUT!
        <Outlet />
      </div>
    </div>
  );
};
