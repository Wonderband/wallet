import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../../redux/finance/financeOperations';
import { ModalAddTransaction } from '../ModalAddTransaction/ModalAddTransaction';
import CategoryName from './CategoryName';
import css from './HomeTab.module.scss';
import { AiFillDelete } from 'react-icons/ai';
import { MdEdit } from 'react-icons/md';

const TransactionTableRow = ({ transaction }) => {
  const { transactionDate, type, categoryId, comment, amount, balanceAfter } =
    transaction;

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };

  const handleDelete = () => {
    dispatch(deleteTransaction(transaction.id))
    
  }

  return (
    <>
      <tr className={css.table__tr}>
        <td className={css.tdDate}>{`${new Date(transactionDate)
          .getDate()
          .toString()
          .padStart(2, '0')}.${(new Date(transactionDate).getMonth() + 1)
          .toString()
          .padStart(2, '0')}.${new Date(transactionDate)
          .getFullYear()
          .toString()
          .slice(2)}`}</td>
        <td className={css.tdType}>{type === 'INCOME' ? '+' : '-'}</td>
        <td className={css.tdCategory}>
          {<CategoryName categoryId={categoryId} />}
        </td>
        <td className={css.tdComment}>{comment}</td>
        <td className={amount > 0 ? css.income : css.expense}>
          {amount < 0 ? amount * -1 : amount}
        </td>
        <td className={css.tdBalance}>
          {balanceAfter ? Math.abs(balanceAfter.toFixed(2)) : 0}
          <button onClick={() => setShowModal(true)} style={{marginLeft: '10px'}}>
            <MdEdit color='#4a56e2' size='18' />
          </button>{' '}
          <button onClick={handleDelete}>
            <AiFillDelete color='#ff6596' size='18' />
          </button>
        </td>
      </tr>
      {showModal && (
        <ModalAddTransaction
          transaction={transaction}
          closeEditModal={closeModal}
        />
      )}
    </>
  );
};

export default TransactionTableRow;
