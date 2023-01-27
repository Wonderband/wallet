import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { register } from 'redux/session/sessionOperations';
import * as yup from 'yup';

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
      <Form>
        <label>
          Email
          <Field type="email" name="email" />
          <ErrorMessage name="email" />
        </label>
        <label>
          Password
          <Field type="password" name="password" />
          <ErrorMessage name="password" />
        </label>
        <label>
          Confirm password
          <Field type="password" name="passwordConfirmation" />
          <ErrorMessage name="passwordConfirmation" />
        </label>
        <label>
          First Name
          <Field type="text" name="username" />
          <ErrorMessage name="username" />
        </label>
        <button type="submit">Submit</button>
        <NavLink to="/login">login</NavLink>
      </Form>
    </Formik>
  );
};
