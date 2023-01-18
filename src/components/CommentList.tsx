import React from "react";
import { useDispatch } from "react-redux";
import { commentApiManager } from "../apis/apis";
import { deleteComment } from "../store/commentsSlice";
import {
  Button,
  Comment,
  CommentContainer,
  Content,
  CreatedAt,
  LightGrayButton,
} from "../styles/styles";
import { IComment } from "../types/types";

export const NUM_OF_COMMENTS_PER_SINGLE_PAGE = 4;

function CommentList({
  comments,
  nowPage,
  setNowPage,
  setTargetComment,
}: {
  comments: Array<IComment>;
  nowPage: number;
  setNowPage: React.Dispatch<React.SetStateAction<number>>;
  setTargetComment: React.Dispatch<React.SetStateAction<IComment | undefined>>;
}) {
  const dispatch = useDispatch();
  const handleOnDeleteButtonClick = async (targetId: number) => {
    const deleteConfirm = window.confirm("정말 삭제하시겠습니까?");
    if (deleteConfirm) {
      const isDeleteSuccessful = await commentApiManager.deleteComment(
        targetId,
      );
      if (isDeleteSuccessful) {
        dispatch(deleteComment(targetId));
        setNowPage(0);
      }
    }
  };
  const SLICED_POINT = nowPage * NUM_OF_COMMENTS_PER_SINGLE_PAGE;
  const SLICED_END = SLICED_POINT + NUM_OF_COMMENTS_PER_SINGLE_PAGE;
  return (
    <CommentContainer>
      {comments.slice(SLICED_POINT, SLICED_END).map((comment) => (
        <Comment key={comment.id}>
          <img src={comment.profile_url} alt={comment.profile_url} />
          {comment.author}
          <CreatedAt>{comment.createdAt}</CreatedAt>
          <Content>{comment.content}</Content>
          <Button>
            <LightGrayButton onClick={() => setTargetComment(comment)}>
              수정
            </LightGrayButton>
            &nbsp;
            <LightGrayButton
              onClick={() => handleOnDeleteButtonClick(comment.id)}
            >
              삭제
            </LightGrayButton>
          </Button>
          <hr />
        </Comment>
      ))}
    </CommentContainer>
  );
}

export default CommentList;
