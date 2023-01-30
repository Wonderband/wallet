import PulseLoader from 'react-spinners/PulseLoader';

import css from './Loader.module.css';
export const Loader = () => {
  return (
    <div className={css.Overlay}>
      <PulseLoader color="#4A56E2" size={30} aria-label="Loading Spinner" />;
    </div>
  );
};
