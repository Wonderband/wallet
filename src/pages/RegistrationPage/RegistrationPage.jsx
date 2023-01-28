import { WalletLogo } from 'assets/images/RegisterForm/Icons';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.scss';

export const RegistrationPage = () => {
  return (
    <main className={styles.container}>
      <WalletLogo />
      <RegistrationForm />
    </main>
  );
};
