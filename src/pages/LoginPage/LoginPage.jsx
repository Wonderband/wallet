import LoginImage from 'assets/images/LoginPage/LoginImage';
import { LoginForm } from 'components/LoginForm/LoginForm';
import styles from './LoginPage.module.scss';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';

export const LoginPage = () => {
  const isLoading = useSelector(state => state.session.isLoading);
  return (
    <main className={styles.container}>
      {isLoading && <Loader />}
      <div className={styles.titleContainer}>
        <LoginImage />
        <h1 className={styles.appTitle}>Finance App</h1>
      </div>
      <LoginForm />
    </main>
  );
};
