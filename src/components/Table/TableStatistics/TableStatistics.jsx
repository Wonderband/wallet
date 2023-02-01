import { useSelector } from 'react-redux';
import { getCategoriesStats } from 'redux/finance/transactionsSummary/transactionsSummarySelectors';
import s from './TableStatistics.module.scss';
import { colors } from '../../../constants/colors';

export const TableStatistics = () => {
  const stats = useSelector(getCategoriesStats);

  function getColor(type) {
    const el = colors.find(item => item.name === type);
    return el.value;
  }
  console.log(stats.expenseSummary);
  return (
    <table className={s.table}>
      <thead>
        <tr className={s.tableHead}>
          <th scope="col">Category</th>
          <th scope="col">Sum</th>
        </tr>
      </thead>
      <div className={s.cell}>
        <div className={s.hh}>
          <tbody className={s.bb}>
            {stats?.summary.map((el, index) => {
              return (
                el.type !== 'INCOME' && (
                  <tr key={index}>
                    <th scope="row">
                      <span
                        className={s.colorForCategory}
                        style={{ backgroundColor: getColor(el?.name) }}
                      ></span>
                      {el?.name}
                    </th>
                    <th scope="row">
                      {el.total ? Math.abs(el.total.toFixed(2)) : 0}
                    </th>
                  </tr>
                )
              );
            })}
          </tbody>
        </div>
      </div>
      <tfoot>
        <tr>
          <th scope="row">Expenses:</th>
          <th className={s.expenses} scope="row">
            {stats.expenseSummary ? stats.expenseSummary.toFixed(2) : 0}
          </th>
        </tr>
        <tr>
          <th scope="row">Income:</th>
          <th className={s.income} scope="row">
            {stats.incomeSummary ? stats.incomeSummary.toFixed(2) : 0}
          </th>
        </tr>
      </tfoot>
    </table>
  );
};
