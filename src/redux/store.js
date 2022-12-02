import { configureStore } from '@reduxjs/toolkit';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';
import persistStore from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
  },
});

export const persistor = persistStore(store);