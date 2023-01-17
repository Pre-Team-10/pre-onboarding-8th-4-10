import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import { commentsSlice } from "../reducers";

export const store = configureStore({
  reducer: {
    comments: commentsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
