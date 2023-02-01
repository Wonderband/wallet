import monthOptions from '../../constants/months';
import yearsOptions from '../../constants/lastFiveYears';

import css from './Table.module.scss';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { selectStyles } from './SelectStyles';
import { getSummary } from 'redux/finance/transactionsSummary/transactionsSummaryOperations';

export const TableFilters = () => {
  const dispatch = useDispatch();

  let currentMonth = new Date().getMonth();
  const MONTHS = [];

  for (let i = 0; i < monthOptions.length; i++) {
    if (currentMonth === 12) {
      currentMonth = 0;
    }
    MONTHS.push(monthOptions[currentMonth]);
    currentMonth++;
  }

  const [date, setDate] = useState({
    month: MONTHS[0].value,
    year: yearsOptions[0].value,
  });

  console.log(date.month);

  const updateDate = (name, value) => {
    setDate(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    async function updateTransactionForPeriod() {
      try {
        // fetch all data from request
        await dispatch(
          getSummary({ month: date.month, year: date.year })
        ).unwrap();
      } catch (error) {
        console.log(error);
      }
    }

    updateTransactionForPeriod();
  }, [date, dispatch]);

  return (
    <div className={css.selectContainer}>
      <Select
        className={css.select}
        styles={selectStyles}
        options={monthOptions}
        onChange={option => {
          updateDate('month', option.value);
        }}
        isSearchable={false}
        defaultValue={MONTHS[0]}
      />
      <Select
        className={css.select}
        styles={selectStyles}
        options={yearsOptions}
        onChange={option => {
          updateDate('year', option.value);
        }}
        isSearchable={false}
        defaultValue={yearsOptions[0]}
      />
    </div>
  );
};
