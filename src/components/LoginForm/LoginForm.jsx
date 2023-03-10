import Icon from 'assets/images/RegisterForm/Icon';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from 'redux/session/sessionOperations';
import * as yup from 'yup';
import styles from './LoginForm.module.scss';

///////////////// Yup validation schema ///////////////

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please, enter a valid email')
    .required('Please, enter your email'),
  password: yup
    .string()
    .min(6, 'Password must contain between 6 and 12 characters')
    .max(12, 'Password must contain between 6 and 12 characters')
    .required('Please, enter your password'),
});

///////////////// Form initial values ///////////////

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const isLoading = useSelector(state => state.session.isLoading);
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    const { email, password } = values;
    dispatch(logIn({ email, password }));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={styles.form}>
        <span className={styles.logoWrapper}>
          <Icon name="icon-wallet" className={styles.logo} />
        </span>
        <label className={styles.label}>
          <Field
            className={styles.textInput}
            type="email"
            name="email"
            placeholder="E-mail"
            required
          />
          <Icon
            name="icon-email"
            className={styles.icon}
            width="24"
            height="24"
          />
          <ErrorMessage
            name="email"
            component="span"
            className={styles.errorMessage}
          />
        </label>
        <label className={styles.label}>
          <Field
            className={styles.passwordInput}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <Icon
            name="icon-password"
            className={styles.icon}
            width="24"
            height="24"
          />
          <ErrorMessage
            component="span"
            className={styles.errorMessage}
            name="password"
          />
        </label>
        <button
          className={styles.submitButton}
          type="submit"
          disabled={isLoading}
        >
          log in
        </button>
        <NavLink className={styles.loginLink} to="/register">
          register
        </NavLink>
      </Form>
    </Formik>
  );
};
