import { useSelector } from 'react-redux';
import { getCategoriesStats } from 'redux/finance/transactionsSummary/transactionsSummarySelectors';
import s from './TableStatistics.module.scss';

export const TableStatistics = () => {
  const stats = useSelector(getCategoriesStats);

  return (
    <table className={s.table}>
      <thead>
        <tr className={s.tableHead}>
          <th>Category</th>
          <th>Sum</th>
        </tr>
      </thead>
      <tbody>
        {stats?.summary.map((el, index) => {
          return (
            el.type !== 'INCOME' && (
              <tr key={index}>
                <th>
                  <span className={s.colorForCategory}></span>
                  {el.name}
                </th>
                <th>{el.total}</th>
              </tr>
            )
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <th>Expenses:</th>
          <th>{stats?.expenseSummary}</th>
        </tr>
        <tr>
          <th>Income:</th>
          <th>{stats?.incomeSummary}</th>
        </tr>
      </tfoot>
    </table>
  );
};
