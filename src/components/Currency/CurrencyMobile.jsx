import { Navigate } from 'react-router-dom';
import useResize from '../../hooks/useResize';
import { Currency } from './Currency';
import s from './Currency.module.css';

export const CurrencyMobile = () => {
  const windowWidth = useResize();

  if (windowWidth > 767) {
    return <Navigate to="/home" />;
  }

  return (
    <div className={s.mobileContainer}>
      <Currency />
    </div>
  );
};
