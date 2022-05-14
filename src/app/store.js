import { configureStore, middleware } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import createCollectionSlice from './pages/Create-Collections/store/createCollectionSlice';
import authSlice from './pages/store/authSlice';
import  messageSlice  from './pages/store/messageSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    createCollection: createCollectionSlice,
    auth: authSlice,
    message: messageSlice
  },
  middleware: getDefaultMiddleware => {
		return getDefaultMiddleware();
	}
});
