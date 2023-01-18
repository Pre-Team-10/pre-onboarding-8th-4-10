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
    addNewComment: (state, { payload: newComment }: { payload: IComment }) => {
      state.unshift(newComment);
    },
    deleteComment: (state, { payload: targetId }: { payload: number }) => {
      return state.filter((comment) => comment.id !== targetId);
    },
    modifyComment: (
      state,
      { payload: modifiedComment }: { payload: IComment },
    ) => {
      const targetCommentIndex = state.findIndex(
        (comment) => comment.id === modifiedComment.id,
      );
      state.splice(targetCommentIndex, 1, modifiedComment);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchAllComments.fulfilled,
      (state, { payload: fetchedAllComments }) => {
        if (fetchedAllComments) return fetchedAllComments;
        return [];
      },
    );
  },
});

export const { addNewComment, deleteComment, modifyComment } =
  commentsSlice.actions;

export default commentsSlice.reducer;
