import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from 'redux/finance/financeOperations';
import { selectIsModalOpen } from 'redux/selectors';

export const HomeTab = () => {
  const isModalOpen = useSelector(selectIsModalOpen);
  // const isAuth = useSelector(selectAuthToken);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);
  return (
    <>
      <div>I'm HOME TAB</div>
      {isModalOpen && <ModalAddTransaction />}
      <ButtonAddTransactions />
    </>
  );
};
