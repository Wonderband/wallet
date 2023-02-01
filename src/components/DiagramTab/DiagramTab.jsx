import { ChartView } from 'components/ChartView/ChartView';
import { Table } from 'components/Table/Table';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategories } from 'redux/finance/financeOperations';
import { refreshUser } from 'redux/session/sessionOperations';
import s from './DiagramTab.module.scss';

export const DiagramTab = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <section className={s.statisticsWrapper}>
      <div>
        <h2 className={s.statisticsHeader}>Statistics</h2>
        <ChartView />
      </div>
      <Table />
    </section>
  );
};

// newuser54678960@gmail.com
