import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
import commentsReducer from "./commentsSlice";

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
  },
  middleware: [...getDefaultMiddleware(), logger],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
