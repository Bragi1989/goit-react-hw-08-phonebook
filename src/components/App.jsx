import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './App.module.css';
import { Suspense, lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';

import * as ROUTES from 'constants/routes.js';
import RestrictedRoute from './RestrictedRoute';
import PrivetRoute from './PrivetRoute';
import { useDispatch } from 'react-redux';
import { refreshThunk } from 'redux/auth/operations';

const HomePage = lazy(() => import('pages/HomePage'));
const RegisterPage = lazy(() => import('pages/RegisterPage'));
const LoginPage = lazy(() => import('pages/LoginPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const appRoutes = [
  {
    path: ROUTES.HOME_ROUTE,
    element: <HomePage />,
  },
  {
    path: ROUTES.LOGIN_ROUTE,
    element: (
      <RestrictedRoute navigateTo={ROUTES.CONTACTS_ROUTE}>
        <LoginPage />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.REGISTER_ROUTE,
    element: (
      <RestrictedRoute navigateTo={ROUTES.CONTACTS_ROUTE}>
        <RegisterPage />
      </RestrictedRoute>
    ),
  },
  {
    path: ROUTES.CONTACTS_ROUTE,
    element: (
      <PrivetRoute>
        <ContactsPage />
      </PrivetRoute>
    ),
  },
];

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshThunk());
  }, [dispatch]);
  const notify = () => toast('Wow so easy!');
  return (
    <Layout>
      <Suspense fallback={<Loader />}>
        <Routes>
          {appRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
      <div>
        <button className={css.buttonNotify} onClick={notify}>
          Notify!
        </button>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
          progress={undefined}
          theme="light"
        />
      </div>
    </Layout>
  );
};
