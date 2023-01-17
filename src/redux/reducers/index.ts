import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchComments } from "../actions";
import { IComment } from "../../types";

const initialState: IComment[] = [];

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    createNewComment: (
      state,
      { payload: newComment }: PayloadAction<IComment>,
    ) => {
      state.unshift(newComment);
    },
    deleteComment: (state, { payload: targetId }: PayloadAction<number>) => {
      return state.filter((comment) => comment.id !== targetId);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchComments.fulfilled,
      (state, { payload: fetchedComments }) => {
        return fetchedComments;
      },
    );
  },
});

export const { createNewComment, deleteComment } = commentsSlice.actions;
export default commentsSlice.reducer;
