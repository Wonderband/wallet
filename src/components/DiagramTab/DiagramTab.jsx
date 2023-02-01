import { ChartView } from 'components/ChartView/ChartView';
import { Table } from 'components/Table/Table';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCategories } from 'redux/finance/financeOperations';
import { refreshUser } from 'redux/session/sessionOperations';
import s from './DiagramTab.module.scss';
import rs from '../ModalAddTransaction/ModalAddTransaction.module.css';

export const DiagramTab = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className={s.diagramTab}>
      <h2
        className={rs.title}
        style={{ textAlign: 'start', margin: '0 0 0 25px' }}
      >
        Statistics
      </h2>
      <div className={s.diagramTab_table}>
        <ChartView />
        <Table />
      </div>
    </div>
  );
};

// newuser54678960@gmail.com
