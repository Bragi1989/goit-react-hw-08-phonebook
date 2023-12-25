import React from 'react';
import AppBar from 'components/AppBar/AppBar';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <Container maxWidth="sx" sx={{ overflow: 'hidden' }}>
      <Box sx={{ bgcolor: '#caf2e9', height: '100vh' }}>
        <AppBar />
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
        <main className={css.wrapper}>{children}</main>
      </Box>
    </Container>
  );
};

export default Layout;
