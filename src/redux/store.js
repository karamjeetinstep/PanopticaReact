import { configureStore } from '@reduxjs/toolkit';
import modalsData from './reducer'
export const store = configureStore({
    reducer: {
        modalsData,
    },
  });