import logo from './logo.svg';
import email from './email.svg';
import user from './user.svg';
import password from './password.svg';

export function WalletLogo() {
  return <img src={logo} alt="wallet icon" width="120" />;
}
export function EmailIcon() {
  return <img src={email} alt="email icon" width="24" />;
}
export function UserIcon() {
  return <img src={user} alt="user icon" width="24" />;
}
export function PasswordIcon() {
  return <img src={password} alt="password icon" width="24" />;
}
