import { DashboardPage } from 'pages/DashBoardPage/DashboardPage';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { Page404 } from 'pages/Page404/Page404';
import { RegistrationPage } from 'pages/RegistrationPage/RegistrationPage';
import { Route, Routes } from 'react-router-dom';
import { DiagramTab } from './DiagramTab/DiagramTab';
import { HomeTab } from './HomeTab/HomeTab';
import { Layout } from './Layout/Layout';
import { Loader } from './Loader/Loader';
import { AuthRoute, GuestRoute } from './redirectRoutes';

export const App = () => {
  return (
    <>
      <Loader />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <GuestRoute
                redirectTo="/register"
                component={<DashboardPage />}
              />
            }
          />
          <Route path="home" element={<HomeTab />} />
          <Route path="diagram" element={<DiagramTab />} />
        </Route>

        <Route
          path="login"
          element={<AuthRoute redirectTo="/" component={<LoginPage />} />}
        />
        <Route
          path="register"
          element={
            <AuthRoute redirectTo="/" component={<RegistrationPage />} />
          }
        />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
};
