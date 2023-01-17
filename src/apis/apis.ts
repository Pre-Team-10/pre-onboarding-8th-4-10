import axios, { Axios } from "axios";
import END_POINTS from "../const/endPoints";
import { STATUS } from "../const/status";
import { IComment } from "../types/types";

interface ICommentApiManager {
  fetchAllComments: () => Promise<Array<IComment> | null>;
  postNewComment: (newComment: IComment) => Promise<boolean>;
  deleteComment: (commentId: number) => Promise<boolean>;
}

class CommentApiManager implements ICommentApiManager {
  private static readonly BASE_URL = "http://localhost:4000";

  private static commentAxios: Axios;

  constructor() {
    CommentApiManager.commentAxios = axios.create({
      baseURL: CommentApiManager.BASE_URL,
    });
  }

  async fetchAllComments() {
    try {
      const { data: fetchAllComments } =
        await CommentApiManager.commentAxios.get<IComment[]>(
          END_POINTS.getComments,
        );
      return fetchAllComments.reverse();
    } catch (e) {
      // TODO: show error toast
      return null;
    }
  }

  async postNewComment(newComment: IComment) {
    try {
      const { status } = await CommentApiManager.commentAxios.post(
        END_POINTS.postComments,
        newComment,
      );
      if (status === STATUS.POST_OK) return true;
      throw new Error();
    } catch (e) {
      // TODO: show error toast
      return false;
    }
  }

  async deleteComment(commentId: number) {
    try {
      const { status } = await CommentApiManager.commentAxios.delete(
        `${END_POINTS.deleteComments}/${commentId}`,
      );
      if (status === STATUS.CHANGE_OK) return true;
      throw new Error();
    } catch (e) {
      // TODO: show error toast
      return false;
    }
  }
}

export const commentApiManager = new CommentApiManager();
