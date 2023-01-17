import React from "react";
import { useDispatch } from "react-redux";
import { commentApiManager } from "../apis/apis";
import { deleteComment } from "../store/commentsSlice";
import { Button, Comment, Content, CreatedAt } from "../styles/styles";
import { IComment } from "../types/types";

function CommentList({ comments }: { comments: Array<IComment> }) {
  const dispatch = useDispatch();
  const handleOnDeleteButtonClick = async (targetId: number) => {
    const isDeleteSuccessful = await commentApiManager.deleteComment(targetId);
    if (isDeleteSuccessful) dispatch(deleteComment(targetId));
  };
  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id}>
          <img src={comment.profile_url} alt={comment.profile_url} />
          {comment.author}
          <CreatedAt>{comment.createdAt}</CreatedAt>
          <Content>{comment.content}</Content>
          <Button>
            <button>수정</button>
            &nbsp;
            <button onClick={() => handleOnDeleteButtonClick(comment.id)}>
              삭제
            </button>
          </Button>
          <hr />
        </Comment>
      ))}
    </>
  );
}

export default CommentList;
