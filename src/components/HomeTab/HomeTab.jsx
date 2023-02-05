import Media from 'react-media';
import dayjs from 'dayjs';

import { ButtonAddTransactions } from 'components/ButtonAddTransactions/ButtonAddTransactions';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCategories,
  getTransactions,
} from 'redux/finance/financeOperations';
import { selectIsModalOpen } from 'redux/selectors';
import { selectTransactions } from 'redux/selectors';
import Pagination from './Pagination/Pagination';

import MobileHomeTab from './MobileHomeTab';
import css from './HomeTab.module.scss';
import TransactionTableRow from './TransactionTableRow';

var advancedFormat = require('dayjs/plugin/advancedFormat');
dayjs.extend(advancedFormat);

const sortTransactionsByDate = state => {
  const transactions = state?.finance?.transactions;
  if (transactions?.length > 0) {
    return transactions
      .slice()
      .sort(
        (a, b) =>
          dayjs(b.transactionDate).format('x') -
          dayjs(a.transactionDate).format('x')
      );
  } else return [];
};

export const HomeTab = () => {
  const transactions = useSelector(sortTransactionsByDate);
  const isModalOpen = useSelector(selectIsModalOpen);

  const dispatch = useDispatch();
  const [pageNum, setPageNum] = useState(1);
  const perPage = 5;
  const pageQtt = Math.ceil(transactions.length / Number(perPage));

  useEffect(() => {
    if (pageNum > pageQtt && pageNum > 1) {
      setPageNum(pageQtt);
    }
    dispatch(getTransactions());
    dispatch(getCategories());
  }, [dispatch, pageQtt, pageNum]);

  const tranSactionToRender = () => {
    return transactions.slice(pageNum * perPage - perPage, pageNum * perPage);
  };

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
                  {tranSactionToRender()
                    .sort((a, b) =>
                      b.transactionDate.localeCompare(a.transactionDate)
                    )
                    .map(transaction => (
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
                        {Array.isArray(tranSactionToRender()) &&
                          tranSactionToRender()
                            .sort((a, b) =>
                              b.transactionDate.localeCompare(a.transactionDate)
                            )
                            .map(transaction => (
                              <TransactionTableRow
                                key={transaction?.id}
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
        {transactions.length > 5 && (
          <Pagination
            pageQtt={pageQtt}
            pageNum={pageNum}
            setPageNum={setPageNum}
          />
        )}
      </section>
      {isModalOpen && <ModalAddTransaction />}
      <ButtonAddTransactions />
    </>
  );
};
