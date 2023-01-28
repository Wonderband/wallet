import MONTHS from '../../constants/months';
import { YEARS } from '../../constants/lastFiveYears';
// import { useEffect } from 'react';

import css from './Table.module.css';

export const Table = () => {
  const handleChange = e => {
    console.log(e.target.value);
  };

  // Треба відправити запит для відображення актуальної інформації в табличці, коли користувач тільки заходить на сторінку.
  // В якому компоненті це робити? На рівень вище?

  // const statisticTableForCurrentMonth =
  //     console.log(YEARS[0]);
  //     console.log(MONTHS[0]);

  return (
    <div className={css.inputs}>
      <label className={css.selectWrapper}>
        <select className={css.select} onChange={handleChange}>
          {MONTHS.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <label className={css.selectWrapper}>
        <select className={css.select} onChange={handleChange}>
          {YEARS.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
