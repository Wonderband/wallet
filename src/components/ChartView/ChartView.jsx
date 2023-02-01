import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import s from './ChartView.module.css';
import { useSelector } from 'react-redux';
import {
  selectExpenseSummary,
  selectTransactionsSummary,
} from 'redux/finance/transactionsSummary/transactionsSummarySelectors';
import { colors } from '../../constants/colors';

export const ChartView = () => {
  Chart.register(ArcElement);

  const expense = useSelector(selectExpenseSummary);

  const dataFinance = useSelector(selectTransactionsSummary).filter(
    item => item.name !== 'Income'
  );

  function getColor(type) {
    const el = colors.find(item => item.name === type);
    return el.value;
  }

  let diagramItemName = [];
  let diagramData = [];
  let diagramItemColor = [];

  dataFinance.forEach(item => {
    diagramItemName.push(item.name);
    diagramData.push(Math.abs(item.total));
    diagramItemColor.push(getColor(item.name));
  });

  const data = {
    labels: diagramItemName,
    datasets: [
      {
        label: '',
        data: diagramData,
        backgroundColor: diagramItemColor,
        hoverOffset: 4,
        cutout: '70%',
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className={s.canva}>
      {expense !== 0 ? (
        <>
          <Doughnut data={data} />
          <p className={s.label}>
            ₴ {(expense * -1).toLocaleString().split(',').join('.')}
          </p>
        </>
      ) : (
        <p className={s.noDiagram}>
          You must have at least 1 expense for this period to make a diagram
        </p>
      )}
    </div>
  );
};
