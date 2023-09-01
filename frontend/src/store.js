import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
import carteSlice from './slices/carteSlice';
import authSlice from './slices/authSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart : carteSlice,
    auth:authSlice

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;