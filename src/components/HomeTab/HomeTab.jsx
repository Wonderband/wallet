import Media from 'react-media';
import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactions } from 'redux/finance/financeOperations';
import { selectIsModalOpen } from 'redux/selectors';
import { selectTransactions } from 'redux/selectors';
import MobileHomeTab from './MobileHomeTab';
import css from './HomeTab.module.css';
import TransactionTableRow from './TransactionTableRow';

export const HomeTab = () => {
  const transactions = useSelector(selectTransactions);
  const isModalOpen = useSelector(selectIsModalOpen);
  // const isAuth = useSelector(selectAuthToken);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);
  return (
    <>
      <section>
        <Media
          queries={{
            small: '(max-width: 767px)',
          }}
        >
          {matches => (
            <>
              {matches.small ? (
                <ul className={css.mobileHomeTab}>
                  {transactions.map(transaction => (
                    <MobileHomeTab
                      key={transaction.id}
                      transaction={transaction}
                    />
                  ))}
                </ul>
              ) : (
                <div className={css.tableWrapper}>
                  <div className={css.tableHeaderWrapper}>
                    <table className={css.table}>
                      <thead>
                        <tr className={css.tableHead}>
                          <th className={css.thDate}>Date</th>
                          <th className={css.thType}>Type</th>
                          <th className={css.thCategory}>Category</th>
                          <th className={css.thComment}>Comment</th>
                          <th className={css.thSum}>Sum</th>
                          <th className={css.thBalance}>Balance</th>
                        </tr>
                      </thead>
                    </table>
                  </div>
                  <div className={css.tableRawsWrapper}>
                    <table className={css.table}>
                      <tbody>
                        {Array.isArray(transactions) &&
                          transactions.map(transaction => (
                            <TransactionTableRow
                              key={transaction.id}
                              transaction={transaction}
                            />
                          ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          )}
        </Media>
      </section>
      {isModalOpen && <ModalAddTransaction />}
      <ButtonAddTransactions />
    </>
  );
};
