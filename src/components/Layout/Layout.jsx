import { Table } from 'components/Table/Table';

import { Outlet } from 'react-router-dom';
import css from './Layout.module.css';

export const Layout = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>I'm header</header>
      <div>
        I'm LAYOUT!
        <Table />
        <Outlet />
      </div>
    </div>
  );
};
