import { DashboardPage } from 'pages/DashBoardPage/DashboardPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { Page404 } from 'pages/Page404/Page404';
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { DiagramTab } from './DiagramTab/DiagramTab';
import { HomeTab } from './HomeTab/HomeTab';
import 'react-toastify/dist/ReactToastify.css';
import { refreshUser } from 'redux/session/sessionOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectAuthToken, selectIsLoading } from '../redux/selectors';
import Toast from './Toast/Toast';
import { Loader } from './Loader/Loader';
import { CurrencyMobile } from './Currency/CurrencyMobile';

export const App = () => {
  const isLoading = useSelector(selectIsLoading)
  const isAuth = useSelector(selectAuthToken);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      <Routes>
        <Route
          path="/"
          element={
            isAuth ? <DashboardPage /> : <Navigate replace to="/login" />
          }
        >
          <Route index element={<Navigate replace to="/home" />} />
          <Route path="home" element={<HomeTab />} />
          <Route path="diagram" element={<DiagramTab />} />
          <Route path="currency" element={<CurrencyMobile />} />
        </Route>
        <Route
          path="/login"
          element={isAuth ? <Navigate to="/home" /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={isAuth ? <Navigate to="/home" /> : <RegistrationPage />}
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Toast />
    </>
  );
};
