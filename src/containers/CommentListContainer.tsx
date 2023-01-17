import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentList from "../components/CommentList";
import Form from "../components/Form";
import { fetchAllComments } from "../store/commentsSlice";
import { RootState } from "../store/store";

function CommentListContainer() {
  const comments = useSelector((state: RootState) => state.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllComments());
  }, [dispatch]);
  const lastCommentId = comments.length === 0 ? 0 : comments[0].id;
  return (
    <div>
      <CommentList comments={comments} />
      <Form lastCommentId={lastCommentId} />
    </div>
  );
}

export default CommentListContainer;
