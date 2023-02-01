import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import s from './ChartView.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectTransactionsSummary } from 'redux/finance/transactionsSummary/transactionsSummarySelectors';
import { useEffect } from 'react';
import { getSummary } from 'redux/finance/transactionsSummary/transactionsSummaryOperations';
import { colors } from '../../constants/colors';

export const ChartView = () => {
  Chart.register(ArcElement);

  const dispatch = useDispatch();
  const dataFinance = useSelector(selectTransactionsSummary).filter(
    item => item.name !== 'Income'
  );
  console.log(dataFinance);
  useEffect(() => {
    dispatch(getSummary());
  }, [dispatch]);

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
      },
    ],
  };

  return (
    <div className={s.canva}>
      <Doughnut data={data} />
    </div>
  );
};
