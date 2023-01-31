import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';
import { Header } from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';

// import css from './DashboardPage.module.css';
export const DashboardPage = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Balance />
      <Currency />
      <Outlet />
    </>
  );
};
