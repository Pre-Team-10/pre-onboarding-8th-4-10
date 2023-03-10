import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentList, {
  NUM_OF_COMMENTS_PER_SINGLE_PAGE,
} from "../components/CommentList";
import Form from "../components/Form";
import PageList from "../components/PageList";
import { fetchAllComments } from "../store/commentsSlice";
import { RootState } from "../store/store";
import { IComment } from "../types/types";

function CommentListContainer() {
  const comments = useSelector((state: RootState) => state.comments);
  const dispatch = useDispatch();
  const [nowPage, setNowPage] = useState(0);
  const [targetComment, setTargetComment] = useState<IComment | undefined>(
    undefined,
  );
  useEffect(() => {
    dispatch(fetchAllComments());
  }, [dispatch]);
  const lastCommentId = comments.length === 0 ? 0 : comments[0].id;
  const numberOfPages = Math.ceil(
    comments.length / NUM_OF_COMMENTS_PER_SINGLE_PAGE,
  );
  return (
    <div>
      <CommentList
        comments={comments}
        nowPage={nowPage}
        setNowPage={setNowPage}
        setTargetComment={setTargetComment}
      />
      <PageList
        numberOfPages={numberOfPages}
        nowPage={nowPage}
        setNowPage={setNowPage}
      />
      <Form
        lastCommentId={lastCommentId}
        targetComment={targetComment}
        setNowPage={setNowPage}
        setTargetComment={setTargetComment}
      />
    </div>
  );
}

export default CommentListContainer;
