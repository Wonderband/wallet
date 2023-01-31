import CategoryName from './CategoryName';
import css from './HomeTab.module.css';

const TransactionTableRow = ({ transaction }) => {
  const { transactionDate, type, categoryId, comment, amount, balanceAfter } =
    transaction;
  return (
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
      <td className={amount > 0 ? css.income : css.expence}>
        {amount < 0 ? amount * -1 : amount}
      </td>
      <td className={css.tdBalance}>{balanceAfter}</td>
    </tr>
  );
};

export default TransactionTableRow;
