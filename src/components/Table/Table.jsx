import s from './Table.module.css';
import { TableFilters } from './TableFilters';

import { TableStatistics } from './TableStatistics/TableStatistics';

export const Table = () => {
  return (
    <>
      <TableFilters />
      <TableStatistics />
    </>
  );
};
