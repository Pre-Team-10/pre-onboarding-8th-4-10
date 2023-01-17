import axios, { Axios } from "axios";
import END_POINTS from "../const/endPoints";
import { IComment } from "../types/types";

interface ICommentApiManager {
  fetchAllComments: () => Promise<Array<IComment>>;
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
    const { data: fetchAllComments } = await CommentApiManager.commentAxios.get<
      IComment[]
    >(END_POINTS.getComments);
    return fetchAllComments;
  }
}

export const commentApiManager = new CommentApiManager();
