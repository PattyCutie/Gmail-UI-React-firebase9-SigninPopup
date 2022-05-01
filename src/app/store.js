import { configureStore } from '@reduxjs/toolkit';
import emailReducer from '../features/emailSlice';
import userReducer from '../features/userSlice';

export const store = configureStore({
  reducer: {
    email: emailReducer,
    user: userReducer,
  },
});
