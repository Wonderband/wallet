import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { useDispatch, useSelector } from 'react-redux';
// import { closeModal } from 'redux/global/globalSlice';
import { selectIsModalOpen } from 'redux/selectors';

export const HomeTab = () => {
  const isModalOpen = useSelector(selectIsModalOpen);
  console.log(isModalOpen);
  return (
    <>
      <div>I'm HOME TAB</div>
      {isModalOpen && <ModalAddTransaction />}
      <ButtonAddTransactions />
    </>
  );
};
