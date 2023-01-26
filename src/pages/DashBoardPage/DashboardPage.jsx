import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import css from './DashboardPage.module.css';
export const DashboardPage = () => {
  return (
    <>
      <div>I'm DASHBOARD page!</div>
      <Navigation />
      <Balance />
      <Currency />
      <Outlet />
    </>
  );
};
