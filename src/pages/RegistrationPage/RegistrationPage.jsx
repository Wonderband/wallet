import RegisterImage from 'assets/images/RegistrationPage/RegisterImage';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import styles from '../LoginPage/LoginPage.module.scss';

export const RegistrationPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.titleContainer}>
        <RegisterImage />
        <h1 className={styles.appTitle}>Finance App</h1>
      </div>
      <RegistrationForm />
    </main>
  );
};
