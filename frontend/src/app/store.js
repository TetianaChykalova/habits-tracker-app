import { configureStore } from '@reduxjs/toolkit';
import goalsReducer from '../compomemts/MyHabits/Goal/GoalsSlice'

export const store = configureStore({
  reducer: {
    goals: goalsReducer
  },
});
