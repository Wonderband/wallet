import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.scss';
import registerImage from '../../assets/images/RegistrationPage/png/register270w.png';

export const RegistrationPage = () => {
  return (
    <main className={styles.container}>
      <div>
        <img src={registerImage} alt="Wallet APP on mobile phone" />
        <h1 className={styles.appTitle}>Finance App</h1>
      </div>
      <RegistrationForm />
    </main>
  );
};
