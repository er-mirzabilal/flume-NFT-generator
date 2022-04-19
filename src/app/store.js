import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createCollectionSlice from './pages/Create-Collections/store/createCollectionSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    createCollection: createCollectionSlice
  },
});
