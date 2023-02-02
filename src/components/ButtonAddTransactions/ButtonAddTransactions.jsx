import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { openModal } from 'redux/global/globalSlice';
import css from './ButtonAddTransactions.module.scss';

export const ButtonAddTransactions = () => {
  const dispatch = useDispatch();
  const modalWindowOpener = e => {
    dispatch(openModal());
  };
  return createPortal(<button className={css.button} onClick={modalWindowOpener}></button>, document.body)
};
