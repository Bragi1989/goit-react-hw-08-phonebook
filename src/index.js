import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { StyledEngineProvider } from '@mui/material';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
    <PersistGate persistor={persistor}>
      <Provider store={store}>
        <StyledEngineProvider injectFirst>
          {' '}
          <App />
        </StyledEngineProvider>
      </Provider>
    </PersistGate>
  </BrowserRouter>
  );
