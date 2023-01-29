import Icon from 'assets/images/RegisterForm/Icon';
import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import styles from './RegistrationPage.module.scss';

export const RegistrationPage = () => {
  return (
    <main className={styles.container}>
      <Icon name="icon-wallet" width={120} height={30} />
      <RegistrationForm />
    </main>
  );
};
