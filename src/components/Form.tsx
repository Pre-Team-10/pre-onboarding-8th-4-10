import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { commentApiManager } from "../apis/apis";
import { addNewComment, modifyComment } from "../store/commentsSlice";
import { FormStyle, LightGrayButton } from "../styles/styles";
import { IComment } from "../types/types";

function Form({
  lastCommentId,
  targetComment,
  setNowPage,
  setTargetComment,
}: {
  lastCommentId: number;
  targetComment: IComment | undefined;
  setNowPage: React.Dispatch<React.SetStateAction<number>>;
  setTargetComment: React.Dispatch<React.SetStateAction<IComment | undefined>>;
}) {
  const dispatch = useDispatch();
  const urlInputRef = useRef<HTMLInputElement>(null);
  const authorInputRef = useRef<HTMLInputElement>(null);
  const contentInputRef = useRef<HTMLTextAreaElement>(null);
  const createdAtInputRef = useRef<HTMLInputElement>(null);
  const urlCurrent = urlInputRef.current;
  const authorCurrent = authorInputRef.current;
  const contentCurrent = contentInputRef.current;
  const ceatedAtCurrent = createdAtInputRef.current;
  const isAllInputsNotNull =
    urlCurrent && authorCurrent && contentCurrent && ceatedAtCurrent;
  const handleOnFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isAllInputsNotNull) {
      const makeAllInputsVacant = () => {
        urlCurrent.value = "";
        authorCurrent.value = "";
        contentCurrent.value = "";
        ceatedAtCurrent.value = "";
      };
      const newComment = {
        profile_url: urlCurrent.value,
        author: authorCurrent.value,
        content: contentCurrent.value,
        createdAt: ceatedAtCurrent.value,
        id: targetComment?.id || lastCommentId + 1,
      };
      if (targetComment) {
        const isModifySuccessful = await commentApiManager.modifyComment(
          newComment,
        );
        if (isModifySuccessful) {
          makeAllInputsVacant();
          dispatch(modifyComment(newComment));
          setTargetComment(undefined);
        }
      } else {
        const isPostSuccessful = await commentApiManager.postNewComment(
          newComment,
        );
        if (isPostSuccessful) {
          makeAllInputsVacant();
          dispatch(addNewComment(newComment));
          setNowPage(0);
        }
      }
    }
  };
  if (targetComment && isAllInputsNotNull) {
    urlCurrent.value = targetComment.profile_url;
    authorCurrent.value = targetComment.author;
    contentCurrent.value = targetComment.content;
    ceatedAtCurrent.value = targetComment.createdAt;
  }
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
        <LightGrayButton type="submit">등록</LightGrayButton>
      </form>
    </FormStyle>
  );
}

export default Form;
