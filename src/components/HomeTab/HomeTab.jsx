import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { useSelector } from 'react-redux';
import { selectIsModalOpen } from 'redux/selectors';

export const HomeTab = () => {
  const isModalOpen = useSelector(selectIsModalOpen);
  return (
    <>
      <div>I'm HOME TAB</div>
      {isModalOpen && <ModalAddTransaction />}
      <ButtonAddTransactions />
    </>
  );
};
