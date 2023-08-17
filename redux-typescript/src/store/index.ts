import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './reducers/Counter';

// Define the type of the root state
type RootState = {
  //counter: typeof counterReducer.initialState;
};

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export type AppState = ReturnType<typeof store.getState>;
