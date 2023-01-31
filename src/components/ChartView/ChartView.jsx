import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import s from './ChartView.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectTransactionsSummary } from 'redux/finance/transactionsSummary/transactionsSummarySelectors';
import { useEffect } from 'react';
import { getSummary } from 'redux/finance/transactionsSummary/transactionsSummaryOperations';

export const ChartView = () => {
  Chart.register(ArcElement);
  const diagramNameColorObj = [
    { name: 'Main expenses', color: '#FED057' },
    { name: 'Products', color: '#FFD8D0' },
    { name: 'Car', color: '#FD9498' },
    { name: 'Self care', color: '#C5BAFF' },
    { name: 'Child-care', color: '#6E78E8' },
    { name: 'Household products', color: '#4A56E2' },
    { name: 'Education', color: '#81E1FF' },
    { name: 'Leisure', color: '#24CCA7' },
    { name: 'Other expenses', color: '#24CCA7' },
    { name: 'Entertainment', color: '#C8DF52' },
  ];

  const dispatch = useDispatch();
  const dataFinance = useSelector(selectTransactionsSummary).filter(
    item => item.name !== 'Income'
  );
  useEffect(() => {
    dispatch(getSummary());
  }, [dispatch]);

  const diagramNames = [];

  const findDiagramData = () => {
    const diagramData = [];
    dataFinance.forEach(item => {
      diagramData.push(item.total * -1);
    });
    return diagramData;
  };

  const findDiagramItemName = () => {
    dataFinance.forEach(item => {
      diagramNames.push(item.name);
    });
    console.log(diagramNames);
    return diagramNames;
  };

  const findDiagramItemColor = () => {
    const diagramColors = [];
    diagramNameColorObj.forEach(item => {
      if (diagramNames.includes(item.name)) {
        diagramColors.push(item.color);
      }
    });
    return diagramColors;
  };

  const data = {
    labels: findDiagramItemName(),
    datasets: [
      {
        label: '',
        data: findDiagramData(),
        backgroundColor: findDiagramItemColor(),
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
