import styled from "styled-components";

export const FormStyle = styled.div`
  & > form {
    padding: 0 10px;
    margin-bottom: 50px;
  }
  & > form > textarea {
    padding: 5px 1%;
    width: 98%;
    height: 50px;
  }
  & > form > input[type="text"] {
    padding: 5px 1%;
    width: 98%;
    margin-bottom: 10px;
  }
`;

export const Comment = styled.div`
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

export const CreatedAt = styled.div`
  float: right;
  vertical-align: middle;
`;

export const Content = styled.div`
  margin: 10px 0;
`;

export const Button = styled.div`
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

export const PageListStyle = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;

export const Page = styled.button<{ active: boolean }>`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  line-height: 1.5;
  border: 1px solid lightgray;
  ${({ active }) =>
    active ? `background: red; color: #fff;` : `background: gray; color: #fff;`}
  margin-right: 3px;
  cursor: pointer;
`;

export const CommentContainer = styled.div`
  min-height: 600px;
`;

export const LightGrayButton = styled.button`
  padding: 0.375rem 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid lightgray;
  cursor: pointer;
`;
