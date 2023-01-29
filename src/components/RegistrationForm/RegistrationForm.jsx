import Icon from 'assets/images/RegisterForm/Icon';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/session/sessionOperations';
import * as yup from 'yup';
import styles from './RegistrationForm.module.css';

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
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords don't match")
    .required('Please confirm password'),
  username: yup.string().required('Please, enter your name'),
});

///////////////// Form initial values ///////////////

const initialValues = {
  email: '',
  password: '',
  passwordConfirmation: '',
  username: '',
};

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = (values, actions) => {
    const { username, email, password } = values;
    dispatch(register({ username, email, password }));
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <Form className={styles.registerForm}>
        <label className={styles.label}>
          <Field
            className={styles.textInput}
            type="email"
            name="email"
            placeholder="E-mail"
          />
          <Icon
            name="icon-email"
            className={styles.icon}
            width="24"
            height="24"
          />
        </label>
        <ErrorMessage name="email" className={styles.errorMessage} />
        <label className={styles.label}>
          <Field
            className={styles.passwordInput}
            type="password"
            name="password"
            placeholder="Password"
          />
          <Icon
            name="icon-password"
            className={styles.icon}
            width="24"
            height="24"
          />
        </label>
        <ErrorMessage name="password" />
        <label className={styles.label}>
          <Field
            className={styles.passwordInput}
            type="password"
            name="passwordConfirmation"
            placeholder="Confirm password"
          />
          <Icon
            name="icon-password"
            className={styles.icon}
            width="24"
            height="24"
          />
        </label>
        <ErrorMessage name="passwordConfirmation" />
        <label className={styles.label}>
          <Field
            className={styles.textInput}
            type="text"
            name="username"
            placeholder="First name"
          />
          <Icon
            name="icon-username"
            className={styles.icon}
            width="24"
            height="24"
          />
        </label>
        <ErrorMessage name="username" />
        <button type="submit" className={styles.submitButton}>
          register
        </button>
        <NavLink to="/login" className={styles.loginLink}>
          log in
        </NavLink>
      </Form>
    </Formik>
  );
};
