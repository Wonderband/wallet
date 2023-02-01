import { Link } from 'react-router-dom';
import styles from './Page404.module.scss';

export const Page404 = () => {
  return (
    <div className={styles.background}>
      <div className={styles.errorContainer}>
        <h2 className={styles.errorTitle}>Ohh! Page not found</h2>
        <p className={styles.errorText}>
          We can't seem to find the page you're looking for
        </p>
        <Link className={styles.backHomeLink} to="/">
          back home
        </Link>
      </div>
    </div>
  );
};
