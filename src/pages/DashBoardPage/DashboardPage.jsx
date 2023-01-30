import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';
// import { useSelector } from 'react-redux';
import { Header } from '../../components/Header/Header';
// import { selectAuthToken } from '../../redux/selectors';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { getTransactions } from 'redux/finance/financeOperations';

// import css from './DashboardPage.module.css';
export const DashboardPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);

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
