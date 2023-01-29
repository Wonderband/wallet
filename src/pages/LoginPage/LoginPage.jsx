import Icon from 'assets/images/RegisterForm/Icon';
import { LoginForm } from 'components/LoginForm/LoginForm';
import styles from './LoginPage.module.scss';
export const LoginPage = () => {
  return (
    <main className={styles.container}>
      <Icon name="icon-wallet" width={120} height={30} />
      <LoginForm />
    </main>
  );
};
