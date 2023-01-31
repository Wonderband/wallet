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
                  <span
                    className={s.colorForCategory}
                    style={{ backgroundColor: getColor(el.name) }}
                  ></span>
                  {el.name}
                </th>
                <th scope="row">{Math.abs(el.total)}</th>
              </tr>
            )
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <th scope="row">Expenses:</th>
          <th className={s.expenses} scope="row">
            {stats.expenseSummary}
          </th>
        </tr>
        <tr>
          <th scope="row">Income:</th>
          <th className={s.income} scope="row">
            {stats.incomeSummary}
          </th>
        </tr>
      </tfoot>
    </table>
  );
};
