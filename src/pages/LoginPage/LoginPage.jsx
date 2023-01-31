import LoginImage from 'assets/images/LoginPage/LoginImage';
import { LoginForm } from 'components/LoginForm/LoginForm';
import styles from './LoginPage.module.scss';

export const LoginPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.titleContainer}>
        <LoginImage />
        <h1 className={styles.appTitle}>Finance App</h1>
      </div>
      <LoginForm />
    </main>
  );
};
