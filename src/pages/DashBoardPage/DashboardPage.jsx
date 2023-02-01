import { Balance } from 'components/Balance/Balance';
import { Currency } from 'components/Currency/Currency';
import { Navigation } from 'components/Navigation/Navigation';
import { Header } from '../../components/Header/Header';
import { Outlet } from 'react-router-dom';
import css from './DashboardPage.module.scss';

export const DashboardPage = () => {
  return (
    <>
      <Header />
      <div className={`${css.container} ${css.mainContainer}`}>
        <div className={css.left}>
          <div className={css.navigationBalance}>
            <Navigation />
            <Balance />
          </div>
          <div className={css.currencyContainer}>
            <Currency />
          </div>
        </div>
        <div className={css.right}>
          <Outlet />
        </div>
      </div>
    </>
  );
};
