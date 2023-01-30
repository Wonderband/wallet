import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { selectAuthToken } from '../../redux/selectors';
// import css from './DashboardPage.module.css';
export const DashboardPage = () => {
  return (
    <>
      <Header />
      <div>I'm DASHBOARD page!</div>
      <Navigation />
      <Balance />
      <Currency />
      <Outlet />
    </>
  );
};
