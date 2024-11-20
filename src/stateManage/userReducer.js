import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../stateMange/userReducer'

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;