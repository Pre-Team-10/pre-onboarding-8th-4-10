import React from "react";
import { Comment, CreatedAt, Content, Button } from "./styles";

// 임시 데이터 입니다. 코드 작성시 data 부분을 지워주세요
const data = [
  {
    id: 1,
    profile_url: "https://picsum.photos/id/1/50/50",
    author: "abc_1",
    content: "UI 테스트는 어떻게 진행하나요",
    createdAt: "2020-05-01",
  },
];

function CommentList() {
  return (
    <>
      {data.map((comment) => (
        <Comment key={comment.id}>
          <img src={comment.profile_url} alt="" />

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
