import React from "react";
import styled from "styled-components";
import { IComment } from "../types/types";

const Comment = styled.div`
  padding: 7px 10px;
  text-align: left;

  & > img {
    vertical-align: middle;
    margin-right: 10px;
    border-radius: 50%;
    width: 50px;
    height: 50px;
  }
`;

const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

const Content = styled.div`
  margin: 10px 0;
`;

const Button = styled.div`
  text-align: right;
  margin: 10px 0;
  & > a {
    margin-right: 10px;
    padding: 0.375rem 0.75rem;
    border-radius: 0.25rem;
    border: 1px solid lightgray;
    cursor: pointer;
  }
`;

function CommentList({ comments }: { comments: Array<IComment> }) {
  return (
    <>
      {comments.map((comment) => (
        <Comment key={comment.id}>
          <img src={comment.profile_url} alt={comment.profile_url} />

          {comment.author}

          <CreatedAt>{comment.createdAt}</CreatedAt>

          <Content>{comment.content}</Content>

          <Button>
            <span>수정</span>
            <span>삭제</span>
          </Button>

          <hr />
        </Comment>
      ))}
    </>
  );
}

export default CommentList;
