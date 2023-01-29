import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { persistor, store } from 'redux/store';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { ModalAddTransaction } from 'components/ModalAddTransaction/ModalAddTransaction';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/wallet">
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
        <ModalAddTransaction />
      </PersistGate>
    </Provider>
  </BrowserRouter>
  // </React.StrictMode>
);
