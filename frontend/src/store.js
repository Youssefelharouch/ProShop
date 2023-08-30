import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './slices/apiSlice';
import carteSlice from './slices/carteSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart : carteSlice
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;