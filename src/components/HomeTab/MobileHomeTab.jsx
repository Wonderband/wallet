import css from './HomeTab.module.scss';
import CategoryName from './CategoryName';

const MobileHomeTab = ({ transaction }) => {
  const { transactionDate, type, categoryId, comment, amount, balanceAfter } =
    transaction;
  return (
    <li>
      <ul
        className={
          type === 'EXPENSE'
            ? css.mobileTabTransactionEXPENSE
            : css.mobileTabTransactionINCOME
        }
      >
        <li className={css.mobileTabRow}>
          <span className={css.mobileTabName}>Date</span>{' '}
          <span>{`${new Date(transactionDate)
            .getDate()
            .toString()
            .padStart(2, '0')}.${(new Date(transactionDate).getMonth() + 1)
            .toString()
            .padStart(2, '0')}.${new Date(transactionDate)
            .getFullYear()
            .toString()
            .slice(2)}`}</span>
        </li>
        <li className={css.mobileTabRow}>
          <span className={css.mobileTabName}>Type</span>{' '}
          <span>{type === 'INCOME' ? '+' : '-'}</span>
        </li>
        <li className={css.mobileTabRow}>
          <span className={css.mobileTabName}>Category</span>
          <span>{<CategoryName categoryId={categoryId} />}</span>
        </li>
        <li className={css.mobileTabRow}>
          <span className={css.mobileTabName}>Comment</span>{' '}
          <span>{comment}</span>
        </li>
        <li className={css.mobileTabRow}>
          <span className={css.mobileTabName}>Sum</span>{' '}
          <span className={amount > 0 ? css.mobileIncome : css.mobileExpense}>
            {amount < 0 ? amount * -1 : amount}
          </span>
        </li>
        <li className={css.mobileTabRow}>
          <span className={css.mobileTabName}>Balance</span>{' '}
          <span>{balanceAfter ? Math.abs(balanceAfter.toFixed(2)) : 0}</span>
        </li>
      </ul>
    </li>
  );
};
export default MobileHomeTab;
