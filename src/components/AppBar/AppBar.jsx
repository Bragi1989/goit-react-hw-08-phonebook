import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectAuthenticated } from 'redux/auth/selectors';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    background: {
      orange: '#ffA500',
    },
  },
});

export default function ButtonAppBar() {
  const authenticated = useSelector(selectAuthenticated);
  return (
    <ThemeProvider theme={theme}>
      {' '}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar
          position="sticky"
          sx={{
            bgcolor: 'background.yellow',
            paddingLeft: 4,
            paddingRight: 4,
            paddingTop: 2,
            paddingBottom: 2,
            marginBottom: 4,
          }}
        >
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Navigation />
            </Typography>

            {authenticated ? (
              <Typography variant="h6" color="inherit">
                <UserMenu />
              </Typography>
            ) : (
              <Typography variant="h6" color="inherit">
                <AuthNav />
              </Typography>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}
