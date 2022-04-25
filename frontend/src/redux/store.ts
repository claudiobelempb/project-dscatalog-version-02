import { configureStore } from '@reduxjs/toolkit';

import userReducer from '../redux/reducers/UserReducer';
import ThemeReducer from './reducers/ThemeReducer';

export const store = configureStore({
  reducer: {
    user: userReducer,
    theme: ThemeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
