import RegisterImage from 'assets/images/RegistrationPage/RegisterImage';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import styles from '../LoginPage/LoginPage.module.scss';
import { Loader } from 'components/Loader/Loader';
import { useSelector } from 'react-redux';

export const RegistrationPage = () => {
  const isLoading = useSelector(state => state.session.isLoading);
  return (
    <main className={styles.container}>
      {isLoading && <Loader />}
      <div className={styles.titleContainer}>
        <RegisterImage />
        <h1 className={styles.appTitle}>Finance App</h1>
      </div>
      <RegistrationForm />
    </main>
  );
};
