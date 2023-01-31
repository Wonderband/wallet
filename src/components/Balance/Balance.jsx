import { useSelector } from 'react-redux';
import s from './Balance.module.scss';

export const Balance = () => {
  const balance = useSelector(state => state.finance.totalBalance);
  return (
    <div className={s.container}>
      <p className={s.text}>YOUR BALANCE</p>
      <p className={s.balance}>₴ <span>{balance.toFixed(2)}</span></p>
    </div>
  );
};
