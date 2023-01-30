import { useSelector } from 'react-redux';
import { getCategoriesStats } from 'redux/finance/transactionsSummary/transactionsSummarySelectors';
import s from './TableStatistics.module.scss';

export const TableStatistics = () => {
  const stats = useSelector(getCategoriesStats);

  function formatAmount(num) {
    return Number(num.toFixed(2)).toLocaleString().replace(',', '.');
  }

  return (
    <table className={s.table}>
      <thead>
        <tr className={s.tableHead}>
          <th scope="col">Category</th>
          <th scope="col">Sum</th>
        </tr>
      </thead>
      <tbody>
        {stats?.summary.map((el, index) => {
          return (
            el.type !== 'INCOME' && (
              <tr key={index}>
                <th scope="row">
                  <span className={s.colorForCategory}></span>
                  {el.name}
                </th>
                <th scope="row">{formatAmount(Math.abs(el.total))}</th>
              </tr>
            )
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <th scope="row">Expenses:</th>
          <th className={s.expenses} scope="row">
            {formatAmount(stats.expenseSummary)}
          </th>
        </tr>
        <tr>
          <th scope="row">Income:</th>
          <th className={s.income} scope="row">
            {formatAmount(stats.incomeSummary)}
          </th>
        </tr>
      </tfoot>
    </table>
  );
};
