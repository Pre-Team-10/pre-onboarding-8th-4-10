import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { commentApiManager } from "../apis/apis";
import END_POINTS from "../const/endPoints";
import { IComment } from "../types/types";

export const fetchAllComments = createAsyncThunk(
  END_POINTS.getComments,
  async () => {
    const fetchedAllComments = await commentApiManager.fetchAllComments();
    return fetchedAllComments;
  },
);

const initialState: Array<IComment> = [];

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    foo: () => {
      return [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllComments.fulfilled, (state, { payload }) => {
      return payload;
    });
  },
});

export const { foo } = commentsSlice.actions;

export default commentsSlice.reducer;
