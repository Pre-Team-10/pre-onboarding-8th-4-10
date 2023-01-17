import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentList from "../components/CommentList";
import { fetchAllComments } from "../store/commentsSlice";
import { RootState } from "../store/store";

function CommentListContainer() {
  const comments = useSelector((state: RootState) => state.comments);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllComments());
  }, [dispatch]);
  return (
    <div>
      <CommentList comments={comments} />
    </div>
  );
}

export default CommentListContainer;
