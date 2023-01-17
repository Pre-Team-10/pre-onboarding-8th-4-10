import axios, { Axios } from "axios";
import { toast } from "react-toastify";
import END_POINTS from "../const/endPoints";
import ERROR_DESCS from "../const/errorDescs";
import SERVER_STATUS from "../const/status";
import { IComment } from "../types/types";

interface ICommentApiManager {
  fetchAllComments: () => Promise<Array<IComment> | null>;
  postNewComment: (newComment: IComment) => Promise<boolean>;
  deleteComment: (commentId: number) => Promise<boolean>;
  modifyComment: (newComment: IComment) => Promise<boolean>;
}

class CommentApiManager implements ICommentApiManager {
  private static readonly BASE_URL = "http://localhost:4000";

  private static commentAxios: Axios;

  constructor() {
    CommentApiManager.commentAxios = axios.create({
      baseURL: CommentApiManager.BASE_URL,
    });
  }

  private static showErrorToast(errorDesc: string) {
    toast.error(errorDesc);
  }

  async fetchAllComments() {
    try {
      const { data: fetchAllComments } =
        await CommentApiManager.commentAxios.get<IComment[]>(
          END_POINTS.getComments,
        );
      return fetchAllComments.reverse();
    } catch (e) {
      CommentApiManager.showErrorToast(ERROR_DESCS.fetchError);
      return null;
    }
  }

  async postNewComment(newComment: IComment) {
    try {
      const { status } = await CommentApiManager.commentAxios.post(
        END_POINTS.postComments,
        newComment,
      );
      if (status === SERVER_STATUS.POST_OK) return true;
      throw new Error();
    } catch (e) {
      CommentApiManager.showErrorToast(ERROR_DESCS.postError);
      return false;
    }
  }

  async deleteComment(commentId: number) {
    try {
      const { status } = await CommentApiManager.commentAxios.delete(
        `${END_POINTS.deleteComments}/${commentId}`,
      );
      if (status === SERVER_STATUS.CHANGE_OK) return true;
      throw new Error();
    } catch (e) {
      CommentApiManager.showErrorToast(ERROR_DESCS.deleteError);
      return false;
    }
  }

  async modifyComment(modifiedComment: IComment) {
    try {
      const { status } = await CommentApiManager.commentAxios.put(
        `${END_POINTS.putComments}/${modifiedComment.id}`,
        modifiedComment,
      );
      if (status === SERVER_STATUS.CHANGE_OK) return true;
      throw new Error();
    } catch (e) {
      CommentApiManager.showErrorToast(ERROR_DESCS.modifyError);
      return false;
    }
  }
}

export const commentApiManager = new CommentApiManager();
