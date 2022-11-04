import { configureStore } from '@reduxjs/toolkit';
import productosSlice from '../features/productosSlice';

const store = configureStore({
  reducer: {
    productos: productosSlice,
  },
});

export default store;