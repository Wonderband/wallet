import { ToastContainer, toast } from 'react-toastify';
import { Slide } from 'react-toastify';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaUserSlash, FaUserLock, FaUserCheck } from 'react-icons/fa';
import Icon from 'assets/images/RegisterForm/Icon';

export default function Toast() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      transition={Slide}
      hideProgressBar
      closeOnClick
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={true}
    />
  );
}

export function toastInvalidPassword(massage) {
  return toast(massage, {
    icon: <RiLockPasswordFill color="currentColor" size="30" />,
  });
}

export function toastInvalidUser(message) {
  return toast(message, {
    icon: <FaUserSlash color="currentColor" size="30" />,
  });
}

export function toastUserAlreadyExist(message) {
  toast(message, {
    icon: <FaUserLock color="currentColor" size="30" />,
  });
}

export function toastRegisterSuccess(message) {
  toast(message, {
    icon: <Icon name="icon-wallet2" height="30" />,
  });
}

export function toastLoginSuccess(message) {
  toast(message, {
    icon: <FaUserCheck color="currentColor" size="30" />,
  });
}
