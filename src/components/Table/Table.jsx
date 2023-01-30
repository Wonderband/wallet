import s from './Table.module.scss';
import { TableFilters } from './TableFilters';

import { TableStatistics } from './TableStatistics/TableStatistics';

export const Table = () => {
  return (
    <div className={s.tableWrapper}>
      <TableFilters />
      <TableStatistics />
    </div>
  );
};
