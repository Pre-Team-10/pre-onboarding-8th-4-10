import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IComment } from "../../types";
import { API_URL } from "../../util/constants";

export const fetchComments = createAsyncThunk(
  "comments/getchComments",
  async () => {
    try {
      const fetchedComments = await axios.get<IComment[]>(API_URL);
      return fetchedComments.data;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // TODO: show toastify
      }
    }
  },
);

export const createNewComment = createAsyncThunk(
  "comments/createNewComment",
  async (newComment: IComment) => {
    try {
      await axios.post<IComment[]>(API_URL, newComment);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // TODO: show toastify
      }
    }
  },
);

export const deleteComment = createAsyncThunk(
  "comments/deleteComment",
  async (commentId: number) => {
    try {
      await axios.delete<IComment[]>(`API_URL/${commentId}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // TODO: show toastify
      }
    }
  },
);
