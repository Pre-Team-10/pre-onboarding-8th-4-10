import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { commentApiManager } from "../apis/apis";
import { addNewComment } from "../store/commentsSlice";
import { FormStyle } from "../styles/styles";

function Form({ lastCommentId }: { lastCommentId: number }) {
  const dispatch = useDispatch();
  const urlInputRef = useRef<HTMLInputElement>(null);
  const authorInputRef = useRef<HTMLInputElement>(null);
  const contentInputRef = useRef<HTMLTextAreaElement>(null);
  const createdAtInputRef = useRef<HTMLInputElement>(null);
  const handleOnFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const urlCurrent = urlInputRef.current;
    const authorCurrent = authorInputRef.current;
    const contentCurrent = contentInputRef.current;
    const ceatedAtCurrent = createdAtInputRef.current;
    if (urlCurrent && authorCurrent && contentCurrent && ceatedAtCurrent) {
      const newComment = {
        profile_url: urlCurrent.value,
        author: authorCurrent.value,
        content: contentCurrent.value,
        createdAt: ceatedAtCurrent.value,
        id: lastCommentId + 1,
      };
      const isPostSuccessful = await commentApiManager.postNewComment(
        newComment,
      );
      if (isPostSuccessful) {
        urlCurrent.value = "";
        authorCurrent.value = "";
        contentCurrent.value = "";
        ceatedAtCurrent.value = "";
        dispatch(addNewComment(newComment));
      }
    }
  };
  return (
    <FormStyle>
      <form onSubmit={handleOnFormSubmit}>
        <input
          type="text"
          name="profile_url"
          placeholder="https://picsum.photos/id/1/50/50"
          required
          ref={urlInputRef}
        />
        <br />
        <input
          type="text"
          name="author"
          placeholder="작성자"
          ref={authorInputRef}
        />
        <br />
        <textarea
          name="content"
          placeholder="내용"
          required
          ref={contentInputRef}
        />
        <br />
        <input
          type="text"
          name="createdAt"
          placeholder="2020-05-30"
          required
          ref={createdAtInputRef}
        />
        <br />
        <button type="submit">등록</button>
      </form>
    </FormStyle>
  );
}

export default Form;
