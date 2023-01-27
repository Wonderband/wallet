import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logIn } from 'redux/session/sessionOperations';
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
});

///////////////// Form initial values ///////////////

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
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
        <button type="submit">login</button>
        <NavLink to="/register">register</NavLink>
      </Form>
    </Formik>
  );
};
