import { configureStore } from '@reduxjs/toolkit';
import { sessionSlicePersistedReducer } from './session/sessionSlice';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { financeSliceReducer } from './finance/financeSlice';
import { globalSliceReducer } from './global/globalSlice';
import { transactionsSummaryReducer } from './finance/transactionsSummary/transactionsSummarySlice';

export const store = configureStore({
  reducer: {
    session: sessionSlicePersistedReducer,
    finance: financeSliceReducer,
    global: globalSliceReducer,
    transactionsSummary: transactionsSummaryReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);
