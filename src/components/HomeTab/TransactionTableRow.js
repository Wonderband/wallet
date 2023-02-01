import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTransaction } from '../../redux/finance/financeOperations';
import { ModalAddTransaction } from '../ModalAddTransaction/ModalAddTransaction';
import CategoryName from './CategoryName';
import css from './HomeTab.module.css';

const TransactionTableRow = ({ transaction }) => {
  const { transactionDate, type, categoryId, comment, amount, balanceAfter } =
    transaction;

  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const closeModal = () => {
    setShowModal(false);
  };
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
          {balanceAfter}{' '}
          <button onClick={() => setShowModal(true)}>edit</button>{' '}
          <button onClick={() => dispatch(deleteTransaction({id: transaction.id, sum: transaction.amount, type: transaction.type}))}>
            delete
          </button>
        </td>
      </tr>
      {showModal && (
        <ModalAddTransaction
          transaction={transaction}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default TransactionTableRow;
