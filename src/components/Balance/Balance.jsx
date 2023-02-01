import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import useResize from '../../hooks/useResize';
import s from './Balance.module.scss';

export const Balance = () => {
  const location = useLocation();
  const windowWidth = useResize();
  const balance = useSelector(state => state.finance.totalBalance);

  if (!location.pathname.includes('home') && windowWidth < 768) {
    return null;
  }

  return (
    <div className={s.container}>
      <p className={s.text}>YOUR BALANCE</p>
      <p className={s.balance}>
        ₴ <span>{balance.toFixed(2)}</span>
      </p>
    </div>
  );
};
